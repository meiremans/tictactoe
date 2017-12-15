let mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let historySchema = new Schema({
    startDate : Date,
    endDate : Date,
    turns : [
        {
            fieldId : String,
            player : String
        }
    ]
});

module.exports = historySchema;