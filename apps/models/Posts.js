const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    date_create: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('posts', PostsSchema);