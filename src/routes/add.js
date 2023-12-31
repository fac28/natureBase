const express = require('express')

//Variables
const router = express.Router()
const templates = require('../templates')
const addPost = require('../model/addPost.js')
const getPosts = require('../model/getPosts.js')

router.get('/', (req, res) => {
    try {
        const posts = getPosts()
        const submissionPage = templates.form(posts)
        res.send(submissionPage)
    } catch (error) {
        console.error('Error with route:', error.message)
        throw error
    }
})

router.post('/', express.urlencoded({ extended: false }), (req, res) => {
    const post = {
        username: req.body.username || 'Anonymous',
        content: req.body.content,
        picture: req.body.picture,
        location: req.body.location,
    }
    const errors = {}

    if (!post.content) {
        errors.content = 'Please enter a description'
    }
    if (!post.location) {
        errors.location = 'Please enter a location'
    }
    if (!post.picture) {
        errors.picture = 'Please enter a picture'
    }

    // if there are errors:
    if (Object.keys(errors).length) {
        const body = templates.submissionForm(errors, req.body)
        res.status(400).send(templates.home() + body)
    } else {
        addPost(post)
        res.redirect('/..')
    }
})

module.exports = router
