const post = require('../models/post')
const User = require('../models/user')

// Display all data

exports.index = (req, res) => {
    post.find({})
        .sort({ createdAt: 'asc' })
        .exec((error, docs) => {
            if (error) {
                return res.status(500).json({ status: 'Fail', reason: error })
            }
            else {
                return res.status(200).json({ status: 'Success', data: docs })
            }
        })
}


// New post

exports.create = (req, res) => {
    const user = req.body.userId
    const postTitle = req.body.postTitle
    const post = req.body.post

    User.findById(user, (docs) => {
        if (docs) {
            const newPost = new Post({
                user: docs,
                postTitle: postTitle,
                post: post
            })
            newPost.save(error => {
                if (error) {
                    return res.status(400).json({ status: 'Fail to create new post', reason: error })
                }
                else {
                    return res.status(200).json({ status: 'Sucess to create new post', data: newPost })
                }
            })
        }
        else {
            return res.status(400).json({ status: 'Fail', reason: 'user id doesn\'t match' })
        }
    })
}

// Display all posts

exports.show = (req, res) => {
    post.find({ user: req.params.id }, (error, docs) => {
        if (error) {
            return res.status(400).json({ status: 'Fail to display some posts', reason: error })
        }
        else {
            return res.status(200).json({ status: 'Sucess to display some posts', data: docs })
        }
    })
}

// Update post

exports.update = (req, res) => {
    const update = {
        postTitle: req.body.postTitle,
        post: req.body.post
    }

    post.findByIdAndUpdate(
        req.params.id,
        { $set: update },
        { new: true },
        (error, docs) => {
            if (error) {
                return res.status(500).json({ status: 'Fail to update a post', reason: error })
            }
            else {
                return res.status(200).json({ status: 'Sucess to update a post', data: docs })
            }
        }
    )
}

// Delete a post

exports.destroy = (req, res) => {
    post.findByIdAndRemove(
        request.params.id,
        (error, docs) => {
            if (error) {
                return res.status(500).json({ status: 'Fail to delete a post', reason: error })
            }
            else {
                return res.status(200).json({ status: 'Sucess to delete a post', data: docs })
            }
        }
    )
}