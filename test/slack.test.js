const slackAlert = require('../lib/slack');
const url = 'https://hooks.slack.com/services/'
describe('Test Slack Webhook', function () {

    it('should send a notification to a slack webhook URL', function (done) {
        let msg = {
            text: "test",
        };
        slackAlert(url,msg).then(res=>{
            if(res !== 0){
                done(new Error(res))
            }else{
                done();
            }
        }).catch(e=>{
            done(e)
        });
    });

    it('should fail to send a notification to a slack webhook URL with empty body', function (done) {
        let msg = {
        };
        slackAlert(url,msg).then(res=>{
            if(res !== 0){
                done()
            }
        }).catch(e=>{
            done(e)
        });
    });

    it('should fail to send a notification to an empty slack webhook URL', function (done) {
        let msg = {
            text: "test",
        };
        slackAlert('',msg).then(res=>{
            if(res !== 0){
                done()
            }
        }).catch(e=>{
            done(e)
        });
    });
});