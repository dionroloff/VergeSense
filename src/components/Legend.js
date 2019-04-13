import React from "react";
import { connect } from "react-redux";

function Legend(props) {
  return (
    <div>
      {/* <u><h4>Legend</h4></u> */}
      {/* Green */}
      <p style={{ color: "#208580" }}>Sensor 1</p>
      {/* Light Blue */}
      &#9702;<p style={{ color: "#5DBCD2" }}>Sensor 2</p>
      {/* Dark Blue */}
      &#9702;<p style={{ color: "#293169" }}>Sensor 3</p>
      {/* Orange */}
      &#9702;<p style={{ color: "#D79C6C" }}>Sensor 4</p>
    </div>
  );
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Legend);
