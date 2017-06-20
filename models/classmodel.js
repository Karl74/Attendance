var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var classNameSchema = new Schema({
  className: String,
  Room: String,
  Period: {
    type: String,
    default: "Full day"
    }
});

var ClassName = mongoose.model("ClassName", classNameSchema);

module.exports = className;
