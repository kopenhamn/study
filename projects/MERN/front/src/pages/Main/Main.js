import React from "react";
import { Grid, Link } from "@material-ui/core";
import LanguageSelector from "../LanguageSelector";

const Main = () => (
  <div>
    <h1>This is Main Page </h1>
    <LanguageSelector />
    <Grid>
      <Link variant="body2" href="/login">
        Sign in
      </Link>
    </Grid>
    <Link variant="body2" href="/sign-up">
      Sign up
    </Link>
  </div>
);

export default Main;
