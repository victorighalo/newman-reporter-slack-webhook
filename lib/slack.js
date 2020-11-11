require('dotenv').config();
const { IncomingWebhook } = require('@slack/webhook');


const send = async (webhookUrl,msg)=>{

    if (!webhookUrl) {
        console.log('please provide slack webhook url');
        return 1;
    }

    if (!msg) {
        console.log('please provide slack message body');
        return 1;
    }

    const webhook = new IncomingWebhook(webhookUrl);
 
    return webhook.send(msg).then( (response) => {
        if (response) {
            return 0;
        }
    }).catch(e=>{
        return e;
    });
}

module.exports = send;