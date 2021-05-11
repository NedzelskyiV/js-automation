const getHelper = require('../../src/api/controllers/get_controller.js');
const postHelper = require('../../src/api/controllers/post_controller.js');


const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
const put_controller = require('../../src/api/controllers/put_controller.js');
const { default: axios } = require('axios');

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

const postObj =   {
    title: 'foo',
    body: 'bar',
    userId: 1
}; 

describe('my api test', () => {

    it('validate user with id 1 is present in the response ', async () => {
        const code = await getHelper.getStatusCode('posts/1');
        expect(code).to.be.eq(200);
        const userPosts = await getHelper.getUsersPostsByUserId(1);
        await expect(userPosts.every(post => post.userId === 1)).to.be.true;

    });

    it('validate status code not to be 404', async () => {
        const code = await getHelper.getStatusCode('posts/1');
        expect(code).not.to.be.eq(404);
    })

    it('validate user has at least 10 posts', async () => {
        const resp = await getHelper.getUsersPostsByUserId(1);
        await expect(resp.length).to.be.greaterThanOrEqual(10);
    });

    it('validate Post method', async () => { 

        const req = await postHelper.addNewPost(postObj);
        expect(req.status).to.be.eq(201);
        const newPost = {...postObj, id: req.data.id};
        expect(req.data).to.deep.equalInAnyOrder(newPost);
    });

    it('validate PUT method', async () => {
        let putPost = {...postObj};
        delete putPost.title;
        putPost.id = 20;
        const req = await put_controller.putNewPost(putPost);
        expect(req.status).to.be.eq(200);
    });

    it('my new test endpoint', async () => {
        await axios.get("https://petstore.swagger.io/v2/pet/1").data;
    });

});