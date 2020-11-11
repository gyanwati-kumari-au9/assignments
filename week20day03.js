// Q. 1. Fetch the data from http://jsonplaceholder.typicode.com/comments
// 2. Create a new array but each object should contain only postId, body
// 3. Create a filtered array with respect to the body’s character limit to less than or
// equal to 50 characters.
// 4. Try to analyse the data, by giving a count of posts with respect to post ID.

// class Post{
//     constructor(pId,body){
//         this.pId = pId;
//         this.body = body;
//     }
// }

const axios = require('axios');



let posts = []
// Make a request for a user with a given ID
axios.get('http://jsonplaceholder.typicode.com/comments')
  .then(function (response) {
    // handle success
    
    // res=JSON.parse(response.data);
    // console.log(response.data);
    response.data.forEach(item => {
      posts.push({postId: item.postId, body: item.body})
    });
  })
  .catch(function (error) {
    // handle error
    // console.log(error);
  })
  .then(function () {
    // always executed
    const filteredPosts = posts.filter( item => item.body.length<=50)
    console.log('===================>',filteredPosts)

  });

