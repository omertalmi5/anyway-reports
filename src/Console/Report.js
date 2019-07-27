import React, {useRef, useEffect} from 'react';
import Graph from './Graph';
import Map from './Map';
import './Report.scss';


function Report() {
    const inputEl = useRef(null);
    const focusOnInput = () => {
        inputEl.current.focus();
    };
    useEffect(focusOnInput, []);

    return (
        <div className="report" onClick={focusOnInput}>
            <div className="info">
                <div className="right">
                    <input className="input" dir="rtl" ref={inputEl} />
                    <Graph />
                </div>
                <div className="left">
                    <Map />
                </div>
            </div>
            <div className="signup">
            </div>
        </div>
    );
}

export default Report;
