import React from "react";
import { connect } from "react-redux";

function Legend(props) {
  return (
    <div>
      {/* <u><h4>Legend</h4></u> */}
      {/* Light Blue */}
      <p style={{ color: "#5DBCD2" }}>Sensor 1</p>
      {/* Dark Blue */}
      &#9702;<p style={{ color: "#293169" }}>Sensor 2</p>
      {/* Orange */}
      &#9702;<p style={{ color: "#D79C6C" }}>Sensor 3</p>
      {/* Teal */}
      &#9702;<p style={{ color: "#208580" }}>Sensor 4</p>
    </div>
  );
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Legend);
