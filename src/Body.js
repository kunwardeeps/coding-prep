import { Heading } from './Heading';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Problem } from './Problem';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export function Body({ tag, setTag, rows }) {
  const classes = useStyles();
  const problems = rows.map((problem, i) => (
    <Problem setTag={setTag} problem={problem} key={i} />
  ));
  return (
    <main>
      <div className={classes.mainContent}>
        <Heading tag={tag} setTag={setTag} />
        {problems}
      </div>
    </main>
  );
}
