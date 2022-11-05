import { Grid, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";

import SignInForm from "../SignInForm/SignInForm";
import Styles from "./SignIn.styles";
import { SignInProps as Props } from "./SignIn.types";

// TODO: Uncomment when functionality is ready
/* const { ENTRY_PATH } = CONSTANTS.ROUTES; */

const SignIn: React.FC<Props> = props => {
  const [step] = useState(0);

  // TODO: Uncomment when functionality is ready
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
        // TODO: Create second sign in step
        return <p> Hello </p>;
      default:
        return <SignInForm />;
    }
  };

  return (
    <Styles className="SignIn">
      <Grid container component="main" className="SignIn__container">
        <Grid item xs={false} sm={4} md={8} className="SignIn__image" />
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          component={Paper}
          elevation={4}
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
