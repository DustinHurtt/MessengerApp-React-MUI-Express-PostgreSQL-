import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Box,
  Grid,
  Paper,
  Typography,
  FormControl,
  InputAdornment,
} from "@mui/material/";
import Toggle from "./Toggle";
import EntryButton from "./EntryButton";
import Greeting from "./Greeting";
import Username from "./Username";

const Login = ({ login, user, changeEntry }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
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
            question="Don't have an account?"
            buttonText="Create Account"
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
              onSubmit={handleLogin}
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
              <Greeting welcome="Welcome Back!" />
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
                    Password
                  </Typography>
                  <TextField
                    aria-label="password"
                    type="password"
                    name="password"
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
                    InputProps={{
                      disableUnderline: false,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            component={Link}
                            to="#"
                            variant="text"
                            color="primary"
                            sx={{
                              color: "#3A8DFF",
                              backgroundColor: "none",
                              textTransform: "none",
                              fontFamily: "Open Sans",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "12px",
                              lineHeight: "16px",
                              textAlign: "center",
                            }}
                          >
                            Forgot?
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <EntryButton buttonText="Login" />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
