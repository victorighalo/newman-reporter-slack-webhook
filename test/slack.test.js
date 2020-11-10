const slackAlert = require('../lib/slack');

describe('Test Slack Webhook', function () {

    it('should send a notification to a slack webhook URL', function (done) {
        let msg = {
            text: "test",
        };
        slackAlert(msg).then(res=>{
            if(res !== 0){
                done(new Error(res))
            }else{
                done();
            }
        })
    });

    it('should fail to send a notification to a slack webhook URL with empty body', function (done) {
        let msg = {
        };
        slackAlert(msg).then(res=>{
            if(res !== 0){
                done()
            }
        })
    });
});