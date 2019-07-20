import React from 'react';
import MyTable from "../MyTable";

function Tables(props) {

    return (
        <div className="data-tables">
            <div className="spacer" />
            <div className='a-table'>
                <MyTable rows={props.schoolList} onRowClick={props.onSchoolSelect}/>
            </div>
            <div className="spacer" />
            <div className='a-table'>
                <MyTable rows={props.cityList} className='a-table' onRowClick={props.onCitySelect}/>
            </div>
            <div className="spacer" />
        </div>
    )
}

export default Tables;
