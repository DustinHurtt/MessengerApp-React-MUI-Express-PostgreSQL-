import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Box,
  Grid,
  Paper,
  Typography,
  FormControl,
  FormHelperText,
} from "@mui/material/";
import Toggle from "./Toggle";
import Greeting from "./Greeting";
import Username from "./Username";
import EntryButton from "./EntryButton";

const Signup = ({ user, register, changeEntry }) => {
  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;

    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Grid
      item
      xs={12}
      sm={7}
      component={Paper}
      elevation={6}
      sx={{ marginLeft: "auto" }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Toggle
            changeEntry={changeEntry}
            question="Already have an account?"
            buttonText="Login"
          />
          <Grid
            container
            item
            sx={{
              width: "100%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleRegister}
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "60%",
                height: "51%",
                justifyContent: "space-between",
              }}
            >
              <Greeting welcome="Create an Account." />
              <Grid item sx={{ width: "100%" }}>
                <Username />
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
                    E-mail address
                  </Typography>
                  <TextField
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    variant="standard"
                    required
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
                    Password
                  </Typography>
                  <TextField
                    aria-label="password"
                    type="password"
                    name="password"
                    variant="standard"
                    required
                    sx={{
                      input: {
                        fontFamily: "Open Sans",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "19px",
                        minLength: "6",
                      },
                    }}
                  />
                  <FormHelperText></FormHelperText>
                </FormControl>
                <EntryButton buttonText="Create" />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
