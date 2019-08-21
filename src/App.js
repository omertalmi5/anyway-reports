import React from 'react';

import Report from './Console/Report';
import schoolsRawData from './data/schools';

function App() {

    return (
        <div className="App">
            <Report schools={schoolsRawData} />
        </div>
    );
}

export default App;
