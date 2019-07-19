import React, { useState } from 'react';
import _ from 'lodash';
import './App.scss';
import CircleChart from './CircleChart';
import MyTable from './MyTable';

import data from './data/data';


function App() {
    const [currentCity, setCity] = useState(null);
    const [currentSchool, setSchool] = useState(null);

    function cityRowClicked(cityRow) {
        setSchool(null);
        setCity(cityRow.name);
    }

    function schoolRowClicked(school) {
        setSchool(school);
    }

    let yishuvTotal = _(data)
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

    let schoolRowsForTable = [];
    let rowsForChartSummary = [];
    if (currentCity) {
        schoolRowsForTable = _(data)
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

    //TODO: Figure out these numbers!!!
    let lightInjured = _.sumBy(rowsForChartSummary, 'severly_injured_count');
    let heavyInjured = _.sumBy(rowsForChartSummary, 'light_injured_count');
    let killed = _.sumBy(rowsForChartSummary, 'killed_count');


    return (
    <div className="App">
        <div className="title">{currentCity || 'None'}</div>
        <div className="title">{currentSchool ? currentSchool.school_name  : 'None'}</div>
        <div className="data-tables">
            <div className="spacer" />
            <div className='a-table'>
                <MyTable rows={schoolRowsForTable} onRowClick={schoolRowClicked}/>
            </div>
            <div className="spacer" />
            <div className='a-table'>
                <MyTable rows={yishuvTotal} className='a-table' onRowClick={cityRowClicked}/>
            </div>
            <div className="spacer" />
        </div>
        {currentSchool && <div className="data-map">
            <div className="spacer" />
            <iframe title="map" src={currentSchool.link} />
            <div className="spacer" />
        </div>}
        <div className="data-charts">
            <div className="spacer" />
            <div className="chart">
                <CircleChart slices={_.compact([
                    lightInjured && {name: "פצועים קל", value: 100},
                    heavyInjured && {name: "פצועים קשה", value: 200},
                    killed && {name: "הרוגים", value: 33},
                ])}/>
            </div>
            <div className="spacer" />
        </div>
    </div>
    );
}

export default App;
