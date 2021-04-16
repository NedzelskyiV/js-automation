const JsonBuilder = require('../../api/request.js');

class PutController {

    async putNewPost(newPost) {
        return await JsonBuilder.url(`https://jsonplaceholder.typicode.com/posts/${newPost.id}`)
        .method('PUT')
        .data(newPost)
        .send();
    }

}


module.exports = new PutController();