"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetch = void 0;
const node_fetch_1 = require("node-fetch");
class Fetch {
    constructor(authorizationHeader) {
        this.getRequestOptions = (body, method) => ({
            method,
            headers: {
                Authorization: this.authorization,
                'Content-Type': 'application/json'
            },
            body: method !== 'GET' ? JSON.stringify(body) : undefined
        });
        this.authorization = authorizationHeader;
    }
    post(url, body) {
        console.log('body ', body);
        return this.request(url, body, 'POST');
    }
    get(url) {
        return this.request(url, {}, 'GET');
    }
    request(url, body, method) {
        return node_fetch_1.default(url, this.getRequestOptions(body, method)).then(res => res.json());
    }
}
exports.Fetch = Fetch;
