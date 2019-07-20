import React, { useState } from 'react';
import _ from 'lodash';
import './App.scss';
import Charts from './Displays/Charts';
import Map from './Displays/Map';
import Tables from './Displays/Tables';

import data from './data/data';


function App() {
    const [currentCity, setCity] = useState(null);
    const [currentSchool, setSchool] = useState(null);

    function onCitySelect(cityRow) {
        setSchool(null);
        setCity(cityRow.name);
    }

    function onSchoolSelect(school) {
        setSchool(school);
    }

    let cityList = _(data)
        .groupBy('school_yishuv_name')
        .mapValues(schools => _.sumBy(schools, (school) => {
            return school.total_injured_killed_count;
        }))
        .toPairs()
        .map(item => {
            return {name: item[0], num: item[1], key: item[0]}
        })
        .sortBy('name')
        .value();

    let schoolList = [];
    if (currentCity) {
        schoolList = _(data)
            .filter(school => school.school_yishuv_name === currentCity)
            .groupBy('school_name')
            .mapValues(schoolInstances => {
                return {
                    sum: _.sumBy(schoolInstances, (schoolInstance) => {
                        return schoolInstance.total_injured_killed_count;
                    }),
                    link: _.head(schoolInstances).anyway_link,
                };
            })
            .toPairs()
            .map(item => {
                let [key, value] = item;
                return {name: key, num: value.sum, key, link: value.link}
            })
            .sortBy('name')
            .value();
    }

    return (
    <div className="App">
        <div className="title">{currentCity || 'None'}</div>
        <div className="title">{currentSchool ? currentSchool.name  : 'None'}</div>
        <Tables data={data}
                cityList={cityList}
                onCitySelect={onCitySelect}
                schoolList={schoolList}
                onSchoolSelect={onSchoolSelect}
                />
        {currentSchool && <Map link={currentSchool.link}/>}
        <Charts series={[
            {name: "פצועים קל", value: 100},
            {name: "פצועים קשה", value: 200},
            {name: "הרוגים", value: 33},
        ]}/>
    </div>
    );
}

export default App;
