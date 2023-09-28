const express = require('express')

const deletePost = require('../model/deletePost')

//Variables
const router = express.Router()

router.post('/', (req, res) => {
    try {
        const item_id = req.body.item_id
        deletePost(item_id)
        res.redirect('/')
    } catch (error) {
        console.error('Error with route:', error.message)
        throw error
    }
})

module.exports = router
