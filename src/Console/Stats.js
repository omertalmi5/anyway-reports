import React from 'react';
import _ from 'lodash';

import Graph from './Graph';


const getFromStatsByYear = (stats, year, severity) => {
    let yearRecord = _.find(stats, {accident_year: year, involved_injury_severity: severity.toString()});
    if (_.isUndefined(yearRecord)) {
        return 0;
    }
    return yearRecord.injured_count;
};

let severityStatsByYear = function (stats, severity, name) {
    return {
        name,
        data: [
            getFromStatsByYear(stats, '2013', severity),
            getFromStatsByYear(stats, '2014', severity),
            getFromStatsByYear(stats, '2015', severity),
            getFromStatsByYear(stats, '2016', severity),
            getFromStatsByYear(stats, '2017', severity),
            getFromStatsByYear(stats, '2018', severity)
        ]
    };
};

const getOptions = (stats) => {

    return {
        chart: {
            type: 'column'
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        series: [
            // severityStatsByYear(stats, 1, 'פצועים קל'),
            severityStatsByYear(stats, 2, 'פצועים קשה'),
            severityStatsByYear(stats, 3, 'הרוגים')
            // {
            //     name: 'פצועים קשה', // involved_injury_severity 2
            //     data: [0, 1, 2]
            // },
            // {
            //     name: 'הרוגים', // involved_injury_severity 3
            //     data: [0, 1, 3]
            // },
        ],
        xAxis: {
            categories: ['2013', '2014', '2015', '2016', '2017', '2018'],
        },
        yAxis: {
            title: ''
        }
    };
};


function Stats(props) {
    let options = getOptions(props.school);
    return (
        <div className="stats">
            <Graph options={options}/>
        </div>
    );
}

export default Stats;
