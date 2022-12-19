require('dotenv').config();

const cors = require('cors');

const express = require('express');
const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.FROM_SERVER }));

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.TO_PORT,() => {
      console.log(`Connected to DB at Port ${process.env.TO_PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  });

  const Collections = mongoose.model(process.env.MONGO_COLLECTION,UserSchema);

  app.post('/',async (req,res)=>{
    // console.log(JSON.stringify(req.body));
    const contacts = new Collections(req.body);
    await contacts.save()
      .catch((err) => {
        console.log(err);
      });
    res.end(JSON.stringify(req.body));
  });
