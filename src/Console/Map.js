import React, {useState} from 'react';
import _ from 'lodash';
import SubscribeBar from './SubscribeBar';
import './Map.scss';

function getLink(school, simpleView) {
    let lat = school.latitude;
    let long = school.longitude;
    let link = `https://www.anyway.co.il/?zoom=17&lat=${lat}&lon=${long}`;
    if (simpleView) {
        link = `${link}&start_date=2014-01-01&end_date=2018-12-31&show_fatal=1&show_severe=1&show_light=1&approx=&accurate=1&show_markers=1&show_discussions=0&show_urban=3&show_intersection=3&show_lane=3&show_day=7&show_holiday=0&show_time=24&start_time=25&end_time=25&weather=0&road=0&separation=0&surface=0&acctype=1&controlmeasure=0&district=0&case_type=0&show_rsa=0&age_groups=1234&hide_search=true&map_only=true&hide_search=true`;
    }
    return link;
}



function Map(props) {
    const [simpleView] = useState(true);


    let url = getLink(props.school, simpleView);
    let changerText = simpleView
        ? 'לצפיה במפה המלאה עם אפשרויות חיפוש מתקדמות'
        : 'לצפיה במפה פשוטה בלבד';
    return (
        <div className="map">
            <div className="title">תאונות עם נפגעים (הולכי רגל) בסביבת מוסד הלימודים</div>
            <span className="sub-title">{changerText} <a className="sub-title-link" href={getLink(props.school, false)} target="blank">לחצו כאן</a></span>
            
            <iframe src={url} title={"the map"}/>
            {!_.isNull(props.schoolId) && <SubscribeBar schoolId={props.schoolId}/>}
        </div>
    );
}

export default Map;
