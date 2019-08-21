import React, {useEffect, useState} from 'react';
import _ from 'lodash';

import Loader from './Console/Loader';
import Report from './Console/Report';
import axios from "axios";

function App() {
    const [schoolsMetaData, setSchoolsMetaData] = useState(null);

    useEffect(() => {
        axios.get('https://anyway.co.il/api/schools-names')
            .then(function (response) {
                setSchoolsMetaData(response.data)
            })
    });


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
