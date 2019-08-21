import React from 'react';
import _ from 'lodash';

import './Stats.scss';

import Graph from './Graph';


const getFromStatsByYear = (stats, year, severity) => {
    let yearRecord = _.find(stats, {accident_year: year, involved_injury_severity: severity.toString()});
    if (_.isUndefined(yearRecord)) {
        return 0;
    }
    return parseInt(yearRecord.injured_count);
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
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: { enabled: false },
        series: [
            severityStatsByYear(stats, 1, 'פצועים קל'),
            severityStatsByYear(stats, 2, 'פצועים קשה'),
            severityStatsByYear(stats, 3, 'הרוגים')
        ],
        xAxis: {
            categories: ['2013', '2014', '2015', '2016', '2017', '2018'],
        },
        yAxis: {
            title: ''
        },
        plotOptions: {
            series: {
                enableMouseTracking: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
    };
};


function Stats(props) {
    let options = getOptions(props.school);
    return (
        <div className="stats">
            <div className="title">{props.title}</div>
            <Graph options={options}/>
        </div>
    );
}

export default Stats;
