import _ from 'lodash';
import React from 'react';
// import {useEffect, useRef}  from 'react';
// import {useState} from 'react';
// import axios from 'axios';

// import Graph from './Graph';
import Map from './Map';
import Select from './Select';
import RelativeStats from './RelativeStats';
import VisionZero from './VisionZero';
import './Report.scss';


function Report(props) {
    const [selectedId, setSelectedId] = React.useState('');

    let selectedSchool = _.find(props.schools, {id: selectedId});
    let selectedSchoolValue = _.get(selectedSchool, 'school_name', '');

    let schoolToShowData = selectedSchool || _.head(props.schools);

    return (
        <div className="report" >
            <div className="info">
                <div className="right">
                    <Select schools={props.schools}
                            selectedSchoolValue={selectedSchoolValue}
                            setSelectedId={setSelectedId}/>
                    <RelativeStats school={schoolToShowData}/>
                </div>
                <div className="left">
                    <Map school={schoolToShowData}/>
                </div>
            </div>
            <div className="signup">
            </div>
            <div className="vision-zero-container">
                <VisionZero />
            </div>
        </div>
    );
}

export default Report;
