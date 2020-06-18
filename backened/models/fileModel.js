const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    admin : {type : mongoose.Types.ObjectId, ref : 'Users'},
    created : Date,
    file : String,
    size : Number,
    sharedto : [{type : mongoose.Types.ObjectId, ref : 'Users'}]
})

const model = mongoose.model('Files', schema);
module.exports = model;