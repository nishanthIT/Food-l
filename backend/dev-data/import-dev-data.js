const fs = require('fs');
const mongoose = require('mongoose');
const Menu = require("../modules/menuModel");

const DB = "mongodb+srv://nishanth23082004:9976432561@cluster0.hyqqw2a.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    //  useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));
const menu = JSON.parse(fs.readFileSync(`${__dirname}/menu.json`,`utf-8`));

const importData = async () =>{
    try {
      await Menu.create(menu);
    
      console.log('Data successfully loaded!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };
  const deleteData = async () => {
    try {
      await Menu.deleteMany();
      console.log('Data successfully deleted!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };
  
  if (process.argv[2] === '--import') {
    importData();
  } else if (process.argv[2] === '--delete') {
    deleteData();
  }
  