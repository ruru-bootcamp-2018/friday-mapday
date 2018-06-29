const express = require('express')

const router = express.Router()

const twitter = require('../twitter')

router.get('/search', (req, res) => {
  console.log("Query ", req.query);
  
  console.log('server route recieved request for search ', req.query.searchTerms);
  
  twitter.basicSearch( req.query.searchTerms, (tweets) => {
    console.log('route success');
    
    res.send({tweets})
  })
})

module.exports = router


// twitter.basicSearch( req.query.searchTerms,(tweets) => {
//   console.log('route success');
  
//   res.send({tweets})