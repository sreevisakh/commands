import express from 'express';
import path from 'path';
import Command from './models/commands.model';

const Router = express.Router();

Router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

Router.get('/search', (req, res) => {
  let query;
  if (!req.query.q && !req.query.q.trim()) {
    query = Command.find({}).limit(20);
  } else {
    query = Command.find({ tags: req.query.q.trim() }).select('title command date tags');
  }
  query.exec((err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
});

Router.get('/command/:id', (req, res) => {
  Command.find({ _id: req.params.id }, 'title command date tags', (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
});

Router.post('/add', (req, res) => {
  console.log('/add', req.body);
  const { command, title, tags } = req.body;
  const commandObj = new Command({
    title,
    command,
    tags,
    date: new Date(),
  });

  commandObj.save((err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
});

Router.post('/update', async (req, res) => {
  try {
    console.log('/update', req.body);
    const commandObj = await Command.findOne({ _id: req.body._id });
    const { command, title, tags } = req.body;
    commandObj.title = title;
    commandObj.command = command;
    commandObj.tags = tags;

    const saveResponse = await commandObj.save();
    res.send(saveResponse);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

Router.post('/delete', async (req, res) => {
  try {
    console.log('/delete', req.body);
    const commandObj = await Command.findOne({ _id: req.body._id });
    await commandObj.remove();
    res.send({ _id: req.body._id });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

Router.get('/list', (req, res) => {
  const query = Command.find({}).limit(20).sort({ date: -1 }).select('title command date tags');
  query.exec((err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
});
export default Router;
