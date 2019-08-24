import React, {useEffect, useState} from 'react';
import _ from 'lodash';

import './App.scss';

import Loader from './Console/Loader';
import Report from './Console/Report';
import axios from "axios";

function getData(url, callback) {
    return () => {
        axios.get(url)
            .then(function (response) {
                callback(response.data)
            })
    };
}

function App() {
    const [schoolsMetaData, setSchoolsMetaData] = useState(null);
    useEffect(getData('https://anyway.co.il/api/schools-names', setSchoolsMetaData));

    return (
        <div className="App">
            { _.isNull(schoolsMetaData)
                ? <Loader />
                : <Report schools={schoolsMetaData} />
            }
        </div>
    );
}

export default App;
