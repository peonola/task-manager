const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, 'Görevin ismi olması gerek'],
        maxlength : [40, 'Görev 40 karakterden fazla olamaz'],
        minlength : [5, 'Görev 5 karakterden az olamaz'],
        trim: true
    },
    completed : {
        type: Boolean,
        default: false
    }
})



module.exports = mongoose.model('Task', TaskSchema);