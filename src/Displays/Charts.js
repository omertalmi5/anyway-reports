import React from 'react';
import CircleChart from "./CircleChart";
import _ from "lodash";

function Charts(props) {
    return (
        <div className="data-charts">
            <div className="spacer" />
            <div className="chart">
                <CircleChart slices={_.compact(props.series)}/>
            </div>
            <div className="spacer" />
        </div>
    );
}

export default Charts;
