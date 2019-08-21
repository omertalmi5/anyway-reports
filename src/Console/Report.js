import _ from 'lodash';
import React from 'react';
// import {useEffect, useRef}  from 'react';
// import {useState} from 'react';
import axios from 'axios';

import Stats from './Stats';
import Map from './Map';
import Select from './Select';
import './Report.scss';


function Report(props) {
    const [selectedId, setSelectedId] = React.useState('');
    const [selectedSchoolData, setSelectedSchoolData] = React.useState({id: ''});

    let selectedSchool = _.find(props.schools, {school_id: selectedId});
    let selectedSchoolName = _.get(selectedSchool, 'school_name', '');

    if (selectedId !== selectedSchoolData.id && selectedId !== '') {
        axios.get(`https://anyway.co.il/api/injured-around-schools?school_id=${selectedId}`)
            .then(function (response) {
                setSelectedSchoolData({
                    stats: response.data,
                    id: selectedId
                })
            })
    }
    return (
        <div className="report" >
            <div className="info">
                <div className="right">
                    <Select schools={props.schools}
                            selectedSchoolValue={selectedSchoolName}
                            setSelectedId={setSelectedId}/>
                    {selectedSchoolData.stats && <Stats school={selectedSchoolData.stats} />}
                </div>
                <div className="left">
                    <Map school={selectedSchoolData}/>
                </div>
            </div>
            <div className="signup">
            </div>
        </div>
    );
}

export default Report;
