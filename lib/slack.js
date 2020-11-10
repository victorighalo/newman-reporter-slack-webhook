require('dotenv').config();
const { IncomingWebhook } = require('@slack/webhook');

const webhookUrl = process.env.SLACK_WEBHOOK_URL;

if (!webhookUrl) {
    console.log('please provide slack webhook url');
    return 1;
}

const webhook = new IncomingWebhook(webhookUrl);

const send = (msg)=>{
    if (!msg) {
        console.log('please provide slack message body');
        return 1;
    }
 
    return webhook.send(msg).then( (response) => {
       
        if (response) {
            return 0;
        }
    }).catch(e=>{
        return e;
    });
}

module.exports = send;