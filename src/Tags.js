import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  tags: {
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export function Tags({ updateRows, tags }) {
  const classes = useStyles();
  const tagLinks = tags.map((tag, i) => (
    <Chip key={i} onClick={() => updateRows(tag)} href="#" label={tag} />
  ));

  return (
    <Typography
      variant="subtitle1"
      align="left"
      color="textSecondary"
      paragraph
    >
      <span>Tags: </span>
      <span className={classes.tags}>{tagLinks}</span>
    </Typography>
  );
}
