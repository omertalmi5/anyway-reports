import React from 'react';
import Report from './Console/Report';
import schools from './data/data';

function App() {

    return (
        <div className="App">
            <Report schools={schools}/>
        </div>
    );
}

export default App;
