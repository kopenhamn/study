import React, { useState, useMemo } from "react";
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import { AddToQueue } from "@material-ui/icons";

import { post } from "../../services/api/user";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SIGN_UP_URL = "http://localhost:5000/api/auth/register";

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const isPasswordMatch = useMemo(
    () => password && password === passwordConfirm,
    [password, passwordConfirm]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      return post(SIGN_UP_URL, { email, password })
        .then((res) => alert('The registration was successful! You may login now'))
        .then(() => (window.location.href = "/login"))
        .catch((error) => console.log("error :", error));
    }

    return console.log("Email and password are required");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordConfirm":
        setPasswordConfirm(value);
        break;
      default:
        break;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddToQueue />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="Confirm password"
            type="password"
            id="passwordConfirm"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!isPasswordMatch}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
