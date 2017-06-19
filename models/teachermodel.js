var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teacherSchema = new Schema({
  name: String,
  Room: String,
  Period: {
    type: String,
    default: "Full day"
    }
  TeacherId: 
});

var Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
