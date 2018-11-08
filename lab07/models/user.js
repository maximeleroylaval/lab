const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
});

UserSchema.method('toClient', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;

    return obj;
});

module.exports = mongoose.model('User', UserSchema);