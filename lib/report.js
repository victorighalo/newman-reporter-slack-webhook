let markdowntable = require('markdown-table');
let prettyms = require('pretty-ms');

const generateReport = (title,header,summary)=>{
            let run = summary.run;
            let data = [];
            if (!title) {
                title = summary.collection.name;
                if (summary.environment.name) {
                    title += ' - ' + summary.environment.name;
                }
            }
            let headers = [header, 'total', 'failed'];
            let arr = ['iterations', 'requests', 'testScripts', 'prerequestScripts', 'assertions'];

            data.push(headers);
            arr.forEach((element) => {
                data.push([element, run.stats[element].total, run.stats[element].failed]);
            });

            let duration = prettyms(run.timings.completed - run.timings.started);
            data.push(['------------------', '-----', '-------']);
            data.push(['total run duration', duration]);
            
            let table = markdowntable(data);

            return table;
};

module.exports = generateReport;