import React from "react";

import {
    TextField,
    Typography,
    FormControl,

  } from "@mui/material/";

const Username = (props) => {
  return (

        <FormControl margin="normal" required sx={{ width: "100%" }}>
          <Typography
            sx={{
              color: "#B0B0B0",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "19px",
            }}
          >
          {/* props */}
            Username
          </Typography>
          <TextField
            aria-label="username"
            name="username"
            type="text"
            variant="standard"
            sx={{
              input: {
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "19px",
              },
            }}
          />
        </FormControl>

   
  );
};

export default Username;