import fetch from 'node-fetch'

export class Fetch {
    private authorization: string
  
    constructor(authorizationHeader: string) {
      this.authorization = authorizationHeader
    }
  
    post(url: string, body: object) {
      console.log('body ', body)
      return this.request(url, body, 'POST')
    }
  
    get(url: string) {
      return this.request(url, {}, 'GET')
    }
  
    private request(url: string, body: object, method: string) {
      return fetch(url, this.getRequestOptions(body, method)).then(res => res.json())
    }
  
    private getRequestOptions = (body: object, method: string) => ({
      method,
      headers: {
        Authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: method !== 'GET' ? JSON.stringify(body) : undefined
    })
  }
  