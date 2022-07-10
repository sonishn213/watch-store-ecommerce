import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Loading = ({ color }) => {
  return (
    <div className="fluidContainer flex items-center w-full">
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loading;
