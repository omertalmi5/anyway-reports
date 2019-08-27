import React from 'react';
import './Loader.scss'

function Loader() {
    return (
        <div>
            <div className="spinner" />
            <div style={{textAlign:'center'}}>הזן שם ישוב או שם ביה"ס בשורת החיפוש</div>
        </div>
    );
}

export default Loader;
