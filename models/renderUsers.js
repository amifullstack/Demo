const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose =  require('passport-local-mongoose');

// Schema
const renderUsers = new Schema ({
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  gender: String,
  companyname: String,
  jobtitle: String,
  university: String,
  skill: String
});

renderUsers.plugin(passportLocalMongoose);

module.exports = mongoose.model('renderUser', renderUsers);

