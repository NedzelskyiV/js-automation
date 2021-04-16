const axios = require('axios');

class JsonRequest {
    options = {}

    url(url) {
        this.options.url = url;
        return this;
    }

    method(method) {
        this.options.method = method;
        return this;
    }

    params(params) {
        this.options.params = params;
        return this;
    }

    data(data) { 
        this.options.data = data;
        return this;
    }

    send() {
        return axios(this.options);
    }
}

module.exports = new JsonRequest();