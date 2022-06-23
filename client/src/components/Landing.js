import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Signup from "./Entry/Signup";
import Login from "./Entry/Login";
import SideImage from "./Entry/SideImage";

const Landing = (props) => {
  const [switchEntry, setSwitchEntry] = useState(true);

  const theme = createTheme();

  const changeEntry = () => {
    setSwitchEntry(!switchEntry);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <SideImage item />
        {switchEntry ? (
          <Login
            user={props.user}
            register={props.register}
            login={props.login}
            changeEntry={changeEntry}
          />
        ) : (
          <Signup
            user={props.user}
            register={props.register}
            login={props.login}
            changeEntry={changeEntry}
          />
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default Landing;
