import React from "react";

import { Typography } from "@mui/material/";

const Greeting = (props) => {
  return (
    <Typography
      sx={{
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "26px",
        lineHeight: "40px",
      }}
    >
      {props.welcome}
    </Typography>
  );
};

export default Greeting;
