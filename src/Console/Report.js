import _ from 'lodash';
import React from 'react';
import axios from 'axios';

import Stats from './Stats';
import Map from './Map';
import Select from './Select';
import VisionZero from './VisionZero';
import './Report.scss';
import Loader from "./Loader";


function Report(props) {
    const [selectedId, setSelectedId] = React.useState(541896);
    const [selectedSchoolInjuredData, setSelectedSchoolInjuredData] = React.useState({id: '', stats: null});
    const [selectedSchoolMonthData, setSelectedSchoolMonthData] = React.useState({stats: null});
    const [selectedSchoolGenderData, setSelectedSchoolGenderData] = React.useState({stats: null});

    let selectedSchool = _.find(props.schools, {school_id: selectedId});
    let selectedSchoolName = _.get(selectedSchool, 'school_name', '');

    if (selectedId !== selectedSchoolInjuredData.id && selectedId !== '') {
        axios.get(`https://anyway.co.il/api/injured-around-schools?school_id=${selectedId}`)
            .then(function (response) {
                setSelectedSchoolInjuredData({
                    stats: response.data,
                    id: selectedId
                })
            });
        axios.get(`https://anyway.co.il/api/injured-around-schools-months-graphs-data?school_id=${selectedId}`)
            .then(function (response) {
                setSelectedSchoolMonthData({
                    stats: response.data
                });
            });
        axios.get(`https://anyway.co.il/api/injured-around-schools-sex-graphs-data?school_id=${selectedId}`)
            .then(function (response) {
                setSelectedSchoolGenderData({
                    stats: response.data
                });
            });
    }

    return (
        <div className="report" >
            <div className="info">
                <div className="right">
                    <div className="select-container">
                    <Select schools={props.schools}
                            selectedSchoolValue={selectedSchoolName}
                            setSelectedId={setSelectedId}/>
                    </div>
                    <div className="stats-container">
                        {<Stats injuredStats={selectedSchoolInjuredData.stats}
                                monthStats={selectedSchoolMonthData.stats}
                                genderedStats={selectedSchoolGenderData.stats}
                                title={_.get(selectedSchool, 'school_name')}/>}
                    </div>
                </div>
                <div className="left">
                    { _.isNil(selectedSchool)
                        ? <Loader />
                        : <Map school={selectedSchool} schoolId={selectedId}/>
                    }

                </div>
            </div>
            <div className="vision-zero-container">
                <VisionZero />
            </div>
            <div className="footer">
                <div>הדו״ח מתבסס על נתוני הלשכה המרכזית לסטטיסטיקה. בדו״ח נספרו עבור כל בית ספר כל  הפצועים/ההרוגים הולכי הרגל בגילאים 0-19 בתאונות שעיגונן מדויק ובתוך ריבוע שמרכזו בית הספר וגודל כל צלע ק"מ אחד, בין השנים 2014-2018.</div>
                <div>את הדו"ח הפיקו דרור רשף, אגם רפאלי-פרהדיאן, דן פולק, אבי קליימן, גל רייך ועתליה אלון.</div>
            </div>
        </div>
    );
}

export default Report;
