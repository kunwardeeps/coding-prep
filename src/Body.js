import { Heading } from './Heading';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Problem } from './Problem/Problem';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export function Body({ tag, setTag, problems }) {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.mainContent}>
        <Heading tag={tag} setTag={setTag} />
        {problems.map((problem, i) => (
          <Problem setTag={setTag} problem={problem} key={i} />
        ))}
      </div>
    </main>
  );
}
