import React from "react";

import "./Error.css";

function Error() {
  return (
    <div>
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
        </div>
      </div>
    </div>
  );
}

export default Error;
