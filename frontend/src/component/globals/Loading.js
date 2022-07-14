import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Loading = ({ color }) => {
  return (
    <div className="fluidContainer flex  justify-center  ">
      <div>
        <CircularProgress color="primary" />
      </div>
    </div>
  );
};

export default Loading;
