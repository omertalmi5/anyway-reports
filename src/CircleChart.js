import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import _ from 'lodash';
import React from 'react';

function CircleChart(props) {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        legend: {
            rtl: true,
            labelFormatter: function() {
                return `${this.y} ${this.name}`;
            },
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    format: '{y}',
                }
            }
        },
        title: {
            text: 'התפלגות ע"פ נפגעים'
        },
        series:
            [{
            showInLegend: true,
            data: _.map(props.slices, (slice) => ({name: slice.name, y: slice.value}))
        }]
    };


    return (
        <div className="circle-chart">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default CircleChart;
