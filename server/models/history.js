const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const turnsSubSchema = new Schema({
    fieldId : String,
    player : String
});
const historySchema = new Schema({
    startDate : Date,
    endDate : Date,
    turns : [turnsSubSchema]
});



let History = mongoose.model('History', historySchema);

module.exports = History;