import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export const useStyles = makeStyles((theme) => ({
  loader: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress size={200} disableShrink />
    </div>
  );
}
