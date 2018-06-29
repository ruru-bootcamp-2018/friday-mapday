import request from 'superagent'



export function getScreenName (searchTerms) {
  console.log('clientside api making request: ', searchTerms)
  return request.get('/search')
    .query({searchTerms})
    .then(data => {
      console.log('clientside api success');
      return data.body      
    })
}






// export function getFruits () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }
