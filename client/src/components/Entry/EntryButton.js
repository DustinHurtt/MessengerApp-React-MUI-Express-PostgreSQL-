import React from "react";

import { Button, Grid } from "@mui/material/";

const EntryButton = (props) => {
  return (
    <Grid
    item
    // height={{sx: "16%", sm: "16%"}}
    sx={{
      width: "100%",
      // height: "16%",
      height: "18%",
      // height: "20%",
      display: "flex",
      justifyContent: "center",
      marginTop: "5%",
    }}
  >
    <Button
      type="submit"
      variant="contained"
      size="large"
      sx={{
        marginTop: "5%",
        width: "45%",
        height: "128%",
        textTransform: "none",
        backgroundColor: "#3A8DFF",
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#FFFFFF",
      }}
    >
      {props.buttonText}
    </Button>
  </Grid>
  );
};

export default EntryButton;