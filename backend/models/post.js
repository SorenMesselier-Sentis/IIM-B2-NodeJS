const mongoose = require('mongoose')

const postSchema = mongoose.Schema({

    titre: {type: String, required:true},
    text: {type: String, required:true},
    author: {type: String, required:true}
})

module.exports = mongoose.model('Post', postSchema)