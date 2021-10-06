import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  big: {
    padding: theme.spacing.unit * 5
  }
});

function Section1(props) {
  const { classes } = props;
  return (
    <div id="navigation">
      <Button variant="contained" className={classes.button}>
        One
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Two
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classNames(classes.button, classes.big)}
      >
        Three
      </Button>
    </div>
  );
}

export default withStyles(styles)(Section1);