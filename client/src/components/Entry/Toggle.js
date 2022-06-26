import React from "react";

import { Button, Box, Grid, Typography } from "@mui/material/";

const Toggle = (props) => {
  return (
    <Grid
      item
      marginTop={{ xs: "10%", sm: "0%" }}
      justifyContent={{ xs: "center", sm: "flex-end" }}
      marginLeft={{ xs: "5%", sm: "0%" }}
      sx={{
        display: "flex",
        height: "8%",
      }}
    >
      <Box
        flexDirection={{ xs: "column-reverse", sm: "row" }}
        justifyContent={{ xs: "space-between", sm: "space-evenly" }}
        sx={{
          width: "63%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          marginTop: "4%",
          marginRight: "2%",
        }}
      >
        <Typography
          marginTop={{ xs: "5%", sm: "0%" }}
          sx={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "19px",
            textAlign: "center",
            color: "#B0B0B0",
          }}
        >
          {props.question}
        </Typography>
        <Button
          onClick={props.changeEntry}
          variant="contained"
          color="primary"
          sx={{
            color: "#3A8DFF",
            backgroundColor: "white",
            textTransform: "none",
            height: "100%",
            width: "45%",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "19px",
            textAlign: "center",
          }}
        >
          {props.buttonText}
        </Button>
      </Box>
    </Grid>
  );
};

export default Toggle;
