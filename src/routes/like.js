const express = require('express')

const updateLike = require('../model/updateLike')

//Variables
const router = express.Router()

router.post('/', (req, res) => {
    try {
        const item_id = req.body.item_id
        updateLike(item_id)
        res.redirect('/')
    } catch (error) {
        console.error('Error with route:', error.message)
        throw error
    }
});

module.exports = router
