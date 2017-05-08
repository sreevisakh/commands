import express from 'express';
import path from 'path';
import Command from './models/commands.model'
let Router = express.Router();

Router.get('/', function(req,res){
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

Router.get('/search', function(req, res){
  Command.find({tags: req.query.q},'title command date tags', function(err, response){
    if(err){
      res.status(500).send(err);
    }
    else{
      res.send(response);
    }
  })
})

Router.get('/command/:id', function(req,res){
  Command.find({_id : req.params.id},'title command date tags',function(err, response){
    if(err){
      res.status(500).send(err)
    }
    else{
      res.send(response);
    }
  })
})

Router.post('/add', function(req, res){
  console.log(req.body)
  let {command, title, tags} = req.body
  var commandObj = new Command({
    title,
    command,
    tags,
    date: new Date()
  })

  commandObj.save(function(err, response){
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  })
})

Router.get('/list', (req,res)=>{
  var query = Command.find({}).limit(20).sort({date: -1}).select('title command date tags')
  query.exec(function(err, response){
    if(err){
      res.sattaus(500).send(err);
    }
    else{
      res.send(response);
    }
  })
})
export default Router;
