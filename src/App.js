import React from 'react';
import _ from 'lodash';

import Report from './Console/Report';
import data from './data/data';

function App() {

    let schools = _.map(data, school_instance => {
        return _.assign(
            school_instance,
            {id: `${school_instance.yishuv_name}-${school_instance.yishuv_symbol}-${school_instance.school_name}`}
        );
    });

    return (
        <div className="App">
            <Report schools={schools}/>
        </div>
    );
}

export default App;
