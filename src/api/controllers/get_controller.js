const JsonBuilder = require('../../api/request.js');

class GetHelper {

    async getStatusCode(urlParam) {
        return (await JsonBuilder.url(`https://jsonplaceholder.typicode.com/${urlParam}`)
            .send()).status;

    }

    async getUsersPostsByUserId(id) {
        return (await JsonBuilder.url(`https://jsonplaceholder.typicode.com/posts/`)
            .params({ userId: id })
            .send())
            .data;
    }

}

module.exports = new GetHelper();