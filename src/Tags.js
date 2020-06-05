import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tags: {
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export function Tags({ updateRows, entry }) {
  const classes = useStyles();
  const getTagLinks = (tags) =>
    tags.map((tag, i) => (
      <Link key={i} onClick={() => updateRows(tag)} href="#">
        {tag}
      </Link>
    ));

  return (
    <Typography
      variant="subtitle1"
      align="left"
      color="textSecondary"
      paragraph
    >
      <span>Tags: </span>
      <span className={classes.tags}>{getTagLinks(entry['tags'])}</span>
    </Typography>
  );
}
