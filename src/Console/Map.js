import React from 'react';

import './Map.scss';

function getLink(school) {
    let lat = school.latitude;
    let long = school.longitude;
    return `https://www.anyway.co.il/?zoom=18&lat=${lat}&lon=${long}&start_date=2014-01-01&end_date=2019-12-31&show_fatal=1&show_severe=1&show_light=1&approx=&accurate=1&show_markers=1&show_discussions=0&show_urban=3&show_intersection=3&show_lane=3&show_day=7&show_holiday=0&show_time=24&start_time=25&end_time=25&weather=0&road=0&separation=0&surface=0&acctype=1&controlmeasure=0&district=0&case_type=0&show_rsa=0&age_groups=1,2,3,4&map_only=true`;
}



function Map(props) {
    let url = getLink(props.school);
    return (
        <div className="map">
            <div className="title">תאונות סביב בית הספר</div>
            <iframe src={url} title={"the map"}/>
        </div>
    );
}

export default Map;
