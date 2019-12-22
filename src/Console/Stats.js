import React from 'react';
import _ from 'lodash';

import './Stats.scss';

import Graph from './Graph';


const getFromStatsByYear = (stats, year, severity) => {
    let yearRecord = _.find(stats, {accident_year: year}) || _.find(stats, {accident_year: _.toString(year)});
    console.log(year, yearRecord)
    if (_.isUndefined(yearRecord)) {
        return 0;
    }
    return parseInt(yearRecord[severity] || 0);
};

let severityStatsByYear = function (stats, severity, name, color) {
    return {
        name,
        color,
        data: [
            getFromStatsByYear(stats, 2014, severity),
            getFromStatsByYear(stats, 2015, severity),
            getFromStatsByYear(stats, 2016, severity),
            getFromStatsByYear(stats, 2017, severity),
            getFromStatsByYear(stats, 2018, severity)
        ],
        key: `${name}-${severity}`
    };
};

const getLineOptions = (stats) => {

    let series = [
        severityStatsByYear(stats, 'light_injured_count', 'פצועים קל', '#ffd82b'),
        severityStatsByYear(stats, 'severly_injured_count', 'פצועים קשה', '#ff9f1c'),
        severityStatsByYear(stats, 'killed_count', 'הרוגים', '#d81c32')
    ];

    return {
        chart: {
            height: 250,
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: { enabled: false },
        series,
        xAxis: {
            categories: ['2014', '2015', '2016', '2017', '2018'],
        },
        yAxis: {
            title: '',
            max: Math.max(_(series).map('data').flattenDeep().max(), 10)
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

const HEBREW_MONTHS = ['ינואר', 'פברואר', 'מרס', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];

const getColumnOptions = (stats) => {
    let series = [{
        name: 'נפגעים',
        data: _.reduce(HEBREW_MONTHS, function(res, value) {
                let current = _.find(stats, {accident_month_hebrew: value}) || {count_1: 0};
                res.push(current.count_1);
                return res;
            },
            []),
       color: '#d81c32'
    }];


    return {
        chart: {
            height: 250,
            type: 'column'
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: { enabled: false },
        series,
        xAxis: {
            categories: HEBREW_MONTHS,
        },
        yAxis: {
            title: '',
            max: Math.max(_(series).map('data').flattenDeep().max(), 10)
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

const getPieOptions = (stats) => {

    let total = _.sumBy(stats, 'count_1');
    let series = [{
        colorByPoint: true,
        data: _.map(stats, (stat) => {
            return {
                name: stat.sex_hebrew,
                y: Math.trunc(((stat.count_1 / total) * 10000) / 100)
            }
        }),
        dataLabels: {
            connectorWidth: 0,
            connectorPadding: -10,
            formatter: function () {
                return `${this.point.y}%`;
            },
            distance: 15,
            style: {
                fontSize: '12px',
                fontWeight: 'normal'
            },
        }
    }];

    return {
        chart: {
            height: 250,
            type: 'pie'
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: { enabled: false },
        series,
        plotOptions: {
            series: {
                enableMouseTracking: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            pie: {
                borderWidth: 0,
                borderColor: null,
                showInLegend: true
            }
        },
    };
};

const getSummary = (injuredStats) => {
    let stats = [
        severityStatsByYear(injuredStats, 'light_injured_count', 'פצועים קל', '#ffd82b'),
        severityStatsByYear(injuredStats, 'severly_injured_count', 'פצועים קשה', '#ff9f1c'),
        severityStatsByYear(injuredStats, 'killed_count', 'הרוגים', '#d81c32')
    ];
    let summary = {};
    _.forEach(stats, (data) => {
        const sumInjured =_.sum(data.data);
        const injuredType = data.name;
        summary[injuredType] = {sumInjured:sumInjured, color: data.color};
    })
    return (
        <div>
        <div className="sub-title" style={{fontWeight:'bold'}}>ב-5 השנים האחרונות,
        {_.map(summary, (val, key) => {return (
                        <div>
                            {`${val.sumInjured} `}
                            <span style={{color:val.color}}>{key}</span>
                        </div>)})}

        </div>
        <div>
        בקרב הולכי רגל עד גיל 19
        </div>
        <br/>
        </div>
    )
};

function Stats(props) {
    let lineOptions = getLineOptions(props.injuredStats);
    let columnOptions = getColumnOptions(props.monthStats);
    let pieOptions = getPieOptions(props.genderedStats);

    return (
        <div className="stats">
            <div className="title">{props.title || ''}</div>
            {props.injuredStats && getSummary(props.injuredStats)}
            {props.injuredStats && <>
                <div className="sub-title">נפגעים לפי שנה</div>
                <Graph options={lineOptions}/>
            </>}
            {props.monthStats && <>
                <div className="sub-title">נפגעים לפי חודש</div>
                <Graph options={columnOptions}/>
            </>}
            {props.injuredStats && <>
                <div className="sub-title">נפגעים לפי מין</div>
                <Graph options={pieOptions}/>
            </>}
        </div>
    );
}

export default Stats;
