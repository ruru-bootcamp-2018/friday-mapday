const express = require('express')

const router = express.Router()

const twitter = require('../twitter')

router.get('/search', (req, res) => {
  console.log('server route recieved request for search' + req.body);
  
  twitter.basicSearch(tweets => {
    console.log('route success');
    
    res.send({tweets})
  })
})

module.exports = router
