import request from 'superagent'



export function getScreenName (searchTerms) {
  return request.get('/search')
    .send(searchTerms)
    .then(data => {
      console.log('clientside api success');
      console.log(data.body)
      return data.body      
    })
}






// export function getFruits () {
//   return request.get(rootUrl + '/fruits')
//     .then(res => {
//       return res.body.fruits
//     })
// }
