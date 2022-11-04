import { Grid, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";

import SignInForm from "../SignInForm/SignInForm";
import Styles from "./SignIn.styles";
import { SignInProps as Props } from "./SignIn.types";

/* const { ENTRY_PATH } = CONSTANTS.ROUTES; */

const SignIn: React.FC<Props> = props => {
  const [step] = useState(0);
  /*  const { search } = useLocation();
  const { isAnonymous } = useAuth();
  const navigate = useNavigate(); */

  /* useEffect(() => {
    // If not authenticated
    if (isAnonymous) {
      navigate("/signin");
      return;
    }

    navigate(ENTRY_PATH);
  }, [isAnonymous, navigate, search]); */
  const renderForm = (step: number) => {
    switch (step) {
      case 0:
        return <SignInForm />;
      case 1:
        return <p> Hello </p>;
      default:
        return <SignInForm />;
    }
  };

  return (
    <Styles className="SignIn">
      <Grid container component="main" className="SignIn__container">
        <Grid item xs={false} sm={4} md={7} className="SignIn__image" />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          container
          alignItems="center"
          justifyContent="center"
        >
          {renderForm(step)}
        </Grid>
      </Grid>
    </Styles>
  );
};

SignIn.defaultProps = {};

export default SignIn;
