# newman-reporter-slackwebhook

A [newman](https://github.com/postmanlabs/newman) reporter for [slack](https://slack.com/)

newman run
| collection - environment | total | failed  |
|--------------------------|-------|---------|
| iterations               | 1     | 0       |
| requests                 | 1     | 0       |
| testScripts              | 1     | 0       |
| prerequestScripts        | 1     | 0       |
| assertions               | 1     | 0       |
| ------------------------ | ----- | ------- |
| total run duration       | 100ms |         |

## Installation
    npm install newman-reporter-slackwebhook

## Usage

### Set the reporter options as environment variables

Create a .env file in the root of your project and add these configurations. 
```
export SLACK_WEBHOOK_URL='https://hooks.slack.com/services/xxx/yyy/zzzzzzzzzzzz'
export SLACK_WEBHOOK_MSG_TITLE='newman run title'
export SLACK_WEBHOOK_MSG_HEADER='newman run header'
```

### Run newman test with the reporter option `-r slack`
    newman run my-collection.postman_collection.json -x -r cli,slackwebhook  --reporter-slackwebhook-url 'https://hooks.slack.com/services/xxx/yyy/zzzzzzzzzzzz' --reporter-slackwebhook-title 'External API Tests' --reporter-slackwebhook-header 'API Tests' 
