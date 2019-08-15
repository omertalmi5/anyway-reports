import React from 'react';

function RelativeStats(props) {

    return (
        <div className="relative-stats">
            <div>{props.school.school_name}</div>
            <div>{props.school.yishuv_name}</div>
        </div>
    );
}

export default RelativeStats;
