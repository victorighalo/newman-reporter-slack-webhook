

const generateReport = async (title,header,summary)=>{
    let data = [];
            if (!title) {
                title = summary.collection.name;
                if (summary.environment.name) {
                    title += ' - ' + summary.environment.name;
                }
            }
            let headers = [header, 'total', 'failed'];
            let arr = ['iterations', 'requests', 'testScripts', 'prerequestScripts', 'assertions'];

            await data.push(headers);
            await arr.forEach((element) => {
                data.push([element, run.stats[element].total, run.stats[element].failed]);
            });

            let duration = await prettyms(run.timings.completed - run.timings.started);
            await data.push(['------------------', '-----', '-------']);
            await data.push(['total run duration', duration]);

            let table = await markdowntable(data);

            return table;
};

module.exports = generateReport;