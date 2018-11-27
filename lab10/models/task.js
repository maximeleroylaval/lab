const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    name: {type: String, required: true},
    user_id: {type: String, required: true}
});

TaskSchema.method('toClient', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;
    delete obj.user_id;
    delete obj.__v;

    return obj;
});

module.exports = mongoose.model('Task', TaskSchema);