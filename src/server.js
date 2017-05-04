import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors'
import Router from './routes'

//configs
let port = process.env.PORT || 8081;

//database
mongoose.connect('mongodb://localhost/commands');


//express settings
const app = express();
app.use(cors())
app.use('/', Router);
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname));

let staticPath =  path.resolve(__dirname, '../public');
console.log("Express Static Path: ",staticPath);

app.use(express.static(staticPath));

app.listen(port, function(){
  console.log('App Listing on ', port);
})
