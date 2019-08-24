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
                    <div className="select-container">
                    <Select schools={props.schools}
                            selectedSchoolValue={selectedSchoolName}
                            setSelectedId={setSelectedId}/>
                    </div>
                    <div className="stats-container">
                        {selectedSchoolData.stats && <Stats school={selectedSchoolData.stats}
                                                            title={_.get(selectedSchool, 'school_name')}/>}
                    </div>
                </div>
                <div className="left">
                    { _.isNil(selectedSchool)
                        ? <Loader />
                        : <Map school={selectedSchool}/>
                    }

                </div>
            </div>
            <div className="vision-zero-container">
                <VisionZero />
            </div>
            <div className="footer">
                <div>הדו״ח מתבסס על נתוני הלשכה המרכזית לסטטיסטיקה. בדו״ח נספרו עבור כל בית ספר כל  הפצועים/ההרוגים הולכי הרגל בגילאים 0-19 בתאונות שעיגונן מדויק ובתוך ריבוע שמרכזו בית הספר וגודל כל צלע ק"מ אחד, בין השנים 2013-2017.</div>
                <div>את הדו"ח הפיקו: עתליה אלון, גל רייך, גל פולק, אייל גלזר ואגם רפאלי-פרהדיאן</div>
            </div>
        </div>
    );
}

export default Report;
