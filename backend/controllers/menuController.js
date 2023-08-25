const Menu = require('../modules/menuModel');
const catchAsync = require("../utls/catchAsynce");

exports.getOverview = catchAsync(async (req, res, next) => {
    // 1) Get tour data from collection
    const data = await Menu.find();
  
    // 2) Build template
    // 3) Render that template using tour data from 1)
    res.status(200).render('overview', {
      title: 'All Menu',
      data
    });
  });