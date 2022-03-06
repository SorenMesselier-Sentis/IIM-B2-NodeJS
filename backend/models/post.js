const mongoose = require('mongoose')

const postSchema = mongoose.Schema({

    user: {type: mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    postTitle: {type: String, required:true},
    post: {type: String, required:true}
})

module.exports = mongoose.model('Post', postSchema)