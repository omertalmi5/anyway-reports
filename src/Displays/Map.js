import React from 'react';

function Map(props) {
    return (
        <div className="data-map">
            <div className="spacer" />
            <iframe title="map" src={props.link} />
            <div className="spacer" />
        </div>
    )
}

export default Map;
