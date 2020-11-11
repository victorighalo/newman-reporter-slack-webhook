const { IncomingWebhook } = require('@slack/webhook');
const slackAlert = require('./lib/slack');
const generateReport = require('./lib/report');

class SlackWebhookReporter {
    constructor(emitter, reporterOptions) {
        const backticks = '```';
        let webhook = process.env.SLACK_WEBHOOK_URL || reporterOptions.url;
        let title = process.env.SLACK_WEBHOOK_MSG_TITLE || reporterOptions.title;
        let header = process.env.SLACK_WEBHOOK_MSG_HEADER || reporterOptions.header || '';

        emitter.on('done', (err, summary) => {
            if (err) {
                return;
            }

            try {
                let table = generateReport(title, header, summary);
                let text = `${title}\n${backticks}${table}${backticks}`;
                let msg = {
                    text: text,
                };
                
                slackAlert(webhook,msg)
            } catch (e) {
                console.log(e);
            }
        });
    }
}

module.exports = SlackWebhookReporter;
