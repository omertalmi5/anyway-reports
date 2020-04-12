import React from "react";

import "./EmbeddedReport.scss";

function EmbeddedReport({ report }) {
  return (
    <div className="report">
      <h3 className="title">{report ? report.report_name_hebrew : ""}</h3>
      <iframe
        src={report ? report.url : null}
        title={report ? report.report_name_hebrew : null}
      />
    </div>
  );
}

export default EmbeddedReport;
