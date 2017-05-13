import mongoose from 'mongoose';

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var CommandSchema = new Schema({
  id: ObjectId,
  title: String,
  command: String,
  date: Date,
  tags:[String]
});

export default mongoose.model('Command', CommandSchema);
