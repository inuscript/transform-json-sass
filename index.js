var jsonSass = require("json-sass")
var transform = require("vinyl-transform")
module.exports = function(variableName, asDefault){
  var suffix = asDefault ? " !default" : ""
  return transform(function(){
    return jsonSass({
      prefix: "$" + variableName + ":",
      suffix: suffix
    })
  })
}