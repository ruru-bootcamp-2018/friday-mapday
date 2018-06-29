import request from 'superagent'



export function getScreenName (searchTerms) {
  return request.get('/search')
    .query({searchTerms})
    .then(res => {
      console.log('clientside api success');
      return res.body      
    })
}






// export function getFruits () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }
