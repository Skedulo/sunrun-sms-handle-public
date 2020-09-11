const url = 'https://api.skedulo.com/function/sunrun-sms-handler/sms-handler/sms'

const json = {
    "name": "inbound_sms_10",
    "url": url,
    "type": "inbound_sms",
    "headers": {
        "Authorization": "Bearer xxxxxxx"
    }
    }

console.log(JSON.stringify(json, null, 2))