const { Schema } = require('mongoose');

module.exports = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  studentId: {type: String, required: true},
  dateEntered: {type: Date, required: true, default: () => new Date()},
});
