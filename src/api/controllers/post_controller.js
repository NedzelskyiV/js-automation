const axios = require('axios');

class PostHelper {

    async addNewPost(newPost) {
        return await axios.post('https://jsonplaceholder.typicode.com/posts/', newPost);
    }



}


module.exports = new PostHelper();