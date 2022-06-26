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
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              height: "6.5%",
            }}
          >
            <Box
              sx={{
                width: "63%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "4%",
                marginRight: "2%",
              }}
            >
              <Typography
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
                Don't have an account?
              </Typography>
              <Button
                onClick={changeEntry}
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
                Create Account
              </Button>
            </Box>
          </Grid>

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
              <Typography
                sx={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "26px",
                  lineHeight: "40px",
                }}
              >
                Welcome Back!
              </Typography>

              <Grid item sx={{ width: "100%" }}>
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
                <Grid
                  item
                  sx={{
                    width: "100%",
                    height: "20%",
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
                      width: "40%",
                      height: "125%",
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
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
