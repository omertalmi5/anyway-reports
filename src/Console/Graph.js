import React from 'react';
import './Graph.scss';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function Graph(props) {
    return (
        <div className="graph">
            <div className="graph-chart">
                <HighchartsReact highcharts={Highcharts} options={props.options} />
            </div>
        </div>
    );
}

export default Graph;
