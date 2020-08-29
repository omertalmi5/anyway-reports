import _ from "lodash";
import React from "react";
import axios from "axios";

import Stats from "./Stats";
import Map from "./Map";
import Select from "./Select";
// import VisionZero from "./VisionZero";
import "./Report.scss";

function Report(props) {
  const [
    selectedSchoolInjuredData,
    setSelectedSchoolInjuredData,
  ] = React.useState({ id: props.selectedId, stats: null });
  const [selectedSchoolMonthData, setSelectedSchoolMonthData] = React.useState({
    stats: null,
  });
  const [
    selectedSchoolGenderData,
    setSelectedSchoolGenderData,
  ] = React.useState({ stats: null });

  let selectedSchool = _.find(props.schools, { school_id: props.selectedId });
  let selectedSchoolName = _.get(selectedSchool, "school_name", "");

  if (
    props.selectedId !== selectedSchoolInjuredData.id &&
    props.selectedId !== ""
  ) {
    axios
      .get(
        `https://www.anyway.co.il/api/injured-around-schools?school_id=${props.selectedId}`
      )
      .then(function (response) {
        setSelectedSchoolInjuredData({
          stats: response.data,
          id: props.selectedId,
        });
      });
    axios
      .get(
        `https://www.anyway.co.il/api/injured-around-schools-months-graphs-data?school_id=${props.selectedId}`
      )
      .then(function (response) {
        setSelectedSchoolMonthData({
          stats: response.data,
        });
      });
    axios
      .get(
        `https://www.anyway.co.il/api/injured-around-schools-sex-graphs-data?school_id=${props.selectedId}`
      )
      .then(function (response) {
        setSelectedSchoolGenderData({
          stats: response.data,
        });
      });
  }
  let title = selectedSchool ? _.get(selectedSchool, "school_name") : "";
  return (
    <div className="report">
      <div className="info">
        <div className="right">
          <div className="select-container">
            <Select
              schools={props.schools || []}
              selectedSchoolValue={selectedSchoolName}
              setSelectedId={props.setSelectedId}
            />
          </div>
          <div className="stats-container">
            <Stats
              injuredStats={selectedSchoolInjuredData.stats}
              monthStats={selectedSchoolMonthData.stats}
              genderedStats={selectedSchoolGenderData.stats}
              title={title}
            />
          </div>
        </div>
        <div className="left">
          {selectedSchool ? (
            <Map school={selectedSchool} schoolId={props.selectedId} />
          ) : (
            <div style={{ textAlign: "center", fontSize: 24 }}>
              {" "}
              ⇒⇒ יש להזין בשורת החיפוש שם ישוב או שם מוסד חינוך
            </div>
          )}
        </div>
      </div>
      {/* <div className="vision-zero-container" id="visionZeroSection">
                <VisionZero />
            </div> */}
      <div className="footer">
        <div>
          הדו״ח מתבסס על נתוני הלשכה המרכזית לסטטיסטיקה. בדו״ח נספרו עבור כל מוסד
          חינוך כל הפצועים/הרוגים שנפגעו תוך שימוש בתחבורה רכה (הולכי רגל, רוכבי אופניים ואופניים חשמליים ורוכבי קורקינט חשמלי) בגילאים 5-19 בתאונות שעיגונן מדויק
          ובתוך ריבוע שמרכזו מוסד חינוכי או מקבץ מוסדות חינוכיים וגודל כל צלע ק"מ אחד, בין השנים 2015-2020.
        </div>
        <div>
          את הדו"ח הפיקו דרור רשף, אגם רפאלי-פרהדיאן, דן פולק, אבי קליימן, גל
          רייך ועתליה אלון.
        </div>
      </div>
    </div>
  );
}

export default Report;
