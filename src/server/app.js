import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import Command from './commands.model'
import cors from 'cors'
const app = express();
app.use(bodyParser.json());
app.use(cors())
mongoose.connect('mongodb://localhost/commands');

app.get('/', function(req,res){
  res.sendFile(path.resolve('src/client/index.html'));
})

app.get('/search', function(req, res){
  Command.find({tags: req.query.q},'title command date tags', function(err, response){
    if(err){
      res.status(500).send(err);
    }
    else{
      res.send(response);
    }
  })
})

app.get('/command/:id', function(req,res){
  Command.find({_id : req.params.id},'title command date tags',function(err, response){
      if(err){
        res.status(500).send(err)
      }
      else{
        res.send(response);
      }
  })
})

app.post('/add', function(req, res){
  let {command, title, tags} = validateInput(req.body)
  var commandObj = new Command({
    title,
    command,
    tags,
    date: new Date()
  })

  commandObj.save(function(err){
    if (err) {
      res.status(500).send(err);
    } else {
      res.send();
    }
  })
})

app.get('/list', (req,res)=>{
  Command.find({},'command title date tags', function(err, response){
    if(err){
      res.sattaus(500).send(err);
    }
    else{
      res.send(response);
    }
  })
})

app.listen(8081, function(){
  console.log('App Listing on 8081');
})



function validateInput({command, title, tags}){
  return {
    command,
    title,
    tags
  }
}
