import React from 'react';
import './Map.scss';

function getLink(school) {
    let lat = school.latitude;
    let long = school.longitude;
    let zoomLevel = `16`;
    return `https://www.anyway.co.il/?zoom=${zoomLevel}&lat=${lat}&lon=${long}&start_date=2013-01-01&end_date=2017-12-31&show_fatal=1&show_severe=1&show_light=1&approx=&accurate=1&show_markers=1&show_discussions=0&show_urban=3&show_intersection=3&show_lane=3&show_day=7&show_holiday=0&show_time=24&start_time=25&end_time=25&weather=0&road=0&separation=0&surface=0&acctype=1&controlmeasure=0&district=0&case_type=0&show_rsa=0&age_groups=1,2,3,4`;
}

function Map(props) {
    let link = getLink(props.school);
    return (
        <div className="map">
            <div className="title">{props.school.school_name}</div>
            <iframe src={link} />
        </div>
    );
}

export default Map;
