const { IncomingWebhook } = require('@slack/webhook');
let markdowntable = require('markdown-table');
let prettyms = require('pretty-ms');
const slackAlert = require('./lib/slack');
const generateReport = require('./lib/report');

class SlackReporter {
    constructor(emitter, reporterOptions) {
        console.log('local slack reporter')
        const backticks = '```';
        let title = process.env.TITLE || reporterOptions.title;
        let header = process.env.HEADER || reporterOptions.header || '';

        emitter.on('done', (err, summary) => {
            if (err) {
                return;
            }
            let table = generateReport(title,header,summary);
            let text = `${title}\n${backticks}${table}${backticks}`;
            let msg = {
                text: text,
            };

            slackAlert(msg);
        });
    }
}

module.exports = SlackReporter;
