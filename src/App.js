import React, { useState } from 'react';
import _ from 'lodash';
import './App.scss';
import MyTable from './MyTable';

import data from './data/data';


function App() {
    const [currentCity, setCity] = useState(null);
    const [currentSchool, setSchool] = useState(null);

    function cityRowClicked(cityRow) {
        setCity(cityRow.name);
    }

    function schoolRowClicked(school) {
        setSchool(school);
    }

    let yishuvTotal = _(data)
        .groupBy('school_yishuv_name')
        .mapValues(schools => _.sumBy(schools, (school) => {
            return school.light_injured_count +
                school.severly_injured_count +
                school.killed_count +
                school.rank_in_yishuv +
                school.total_injured_killed_count;
        }))
        .toPairs()
        .map(item => {
            return {name: item[0], num: item[1], key: item[0]}
        })
        .sortBy('name')
        .value();

    let schools = [];
    if (_.isString(currentCity)) {
        schools = _(data)
            .filter(school => school.school_yishuv_name === currentCity)
            .map((school, index) => {
                return _.assign({}, school, {
                    name: school.school_name,
                    num: school.light_injured_count +
                        school.severly_injured_count +
                        school.killed_count +
                        school.rank_in_yishuv +
                        school.total_injured_killed_count,
                    key: school + index,
                });
            })
            .sortBy('name')
            .value();
    }

    return (
    <div className="App">
        <div className="title">{currentCity || 'None'}</div>
        <div className="data-tables">
            <div className='spacer' />
            <div className='a-table'>
                <MyTable rows={schools} onRowClick={schoolRowClicked}/>
            </div>
            <div className='spacer' />
            <div className='a-table'>
                <MyTable rows={yishuvTotal} className='a-table' onRowClick={cityRowClicked}/>
            </div>
            <div className='spacer' />
        </div>
        {currentSchool && <div className="data-map">
            <div className='spacer' />
            <iframe src={currentSchool.anyway_link} />
            <div className='spacer' />
        </div>}
    </div>
    );
}

export default App;
