import React from 'react';
import './Graph.scss';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const options = {
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
        {
            name: 'אל המעיין',
            data: [5, 1, 1]
        },
        {
            name: 'איחוד ג׳',
            data: [0, 1, 2]
        },
        {
            name: 'קורצ׳אק',
            data: [0, 1, 3]
        },
    ],
    xAxis: {
        categories: [
            "פצועים קל",
            "פצועים קשה",
            "הרוגים"
        ]
    },
    yAxis: {
        title: ''
    }
};


function Graph() {
    return (
        <div className="graph">
            <div className="header">כותרת</div>
            <div className="graph-chart">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    );
}

export default Graph;
