const express = require('express');

const Menurout = require("./routes/menuRouter");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DB = "mongodb+srv://nishanth23082004:9976432561@cluster0.hyqqw2a.mongodb.net/?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use("/",Menurout)
mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    //  useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

  const port = 3000
  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
