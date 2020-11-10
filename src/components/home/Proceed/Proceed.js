import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(5),
  },
}));

function Proceed() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="white"
        className={classes.button}
        endIcon={<ArrowForwardIcon/>}
      >
        Proceed to store
      </Button>

    </div>
  );
}

export default Proceed;