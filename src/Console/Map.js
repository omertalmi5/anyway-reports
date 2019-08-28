import React, {useState} from 'react';

import './Map.scss';

function getLink(school, simpleView) {
    let lat = school.latitude;
    let long = school.longitude;
    let link = `https://www.anyway.co.il/?zoom=17&lat=${lat}&lon=${long}&start_date=2014-01-01&end_date=2018-12-31&show_fatal=1&show_severe=1&show_light=1&approx=&accurate=1&show_markers=1&show_discussions=0&show_urban=3&show_intersection=3&show_lane=3&show_day=7&show_holiday=0&show_time=24&start_time=25&end_time=25&weather=0&road=0&separation=0&surface=0&acctype=1&controlmeasure=0&district=0&case_type=0&show_rsa=0&age_groups=1234&hide_search=true`;
    if (simpleView) {
        link = `${link}&map_only=true`;
    }
    return link;
}



function Map(props) {
    const [simpleView, setSimpleView] = useState(true);


    let url = getLink(props.school, simpleView);
    let changerText = simpleView
        ? 'לצפיה במפה המלאה עם אפשרויות חיפוש מתקדמות לחצו כאן'
        : 'לצפיה במפה פשוטה בלבד לחצו כאן';
    return (
        <div className="map">
            <div className="title">תאונות עם נפגעים (הולכי רגל) בסביבת מוסד הלימודים</div>
            <a className="sub-title" href={getLink(props.school, false)} target="blank">{changerText}</a>
            <iframe src={url} title={"the map"}/>
        </div>
    );
}

export default Map;
