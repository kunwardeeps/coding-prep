import { Heading } from './Heading';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Problem } from './Problem';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export function Body({ tag, setTag, rows }) {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.heroContent}>
        <Heading tag={tag} setTag={setTag} />
        {rows.map((problem, i) => (
          <Problem setTag={setTag} problem={problem} key={i} />
        ))}
      </div>
    </main>
  );
}
