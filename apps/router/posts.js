const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

// Get all data
router.get('/', async (req, res) => {
    try {
        const post = await Posts.find();
        res.json([post])
    } catch (error) {
        res.json({message: error});
    }
});

// Post a data
router.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        content: req.body.content
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
       // console.log(savedPost);
    } catch (error) {
        res.json({message: error});
    }
});

// Get a specific data
router.get('/:postId', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message: error});
    }
});

// Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Posts.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title, content: req.body.content}}
        );
        res.json(updatePost);
    } catch (error) {
        res.json( {message: error} );
    }
});

// Delete a post, we will use deleteOne instead of remove because its deprecated
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Posts.deleteOne({_id: req.params.postId});
        res.json(removePost);
    } catch (error) {
        res.json({message: error});
    }
})


module.exports = router;