import { Heading } from './Heading';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Tags } from './Tags';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
        {rows.map((entry, i) => (
          <div key={i}>
            <Container maxWidth="lg">
              <span>&nbsp;&nbsp;</span>
              <ProblemTitle title={entry['title']} source={entry['source']} />
              <Tags updateRows={setTag} tags={entry['tags']} />
              <ProblemApproach approach={entry['approach']} />

              <ProblemCode docco={docco} code={entry['code']} />

              <span>&nbsp;&nbsp;</span>
            </Container>
          </div>
        ))}
      </div>
    </main>
  );
}

function ProblemTitle({ title, source }) {
  return (
    <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
      {source ? (
        <Link target={'_blank'} color={'inherit'} href={source}>
          {title}
        </Link>
      ) : (
        title
      )}
    </Typography>
  );
}

function ProblemApproach({ approach }) {
  if (!approach) return null;
  return (
    <div className="approach">
      <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
        Approach
      </Typography>
      <Typography
        style={{
          whiteSpace: 'pre-wrap',
        }}
        variant="body2"
        align="left"
        color="textPrimary"
        gutterBottom
      >
        {approach}
      </Typography>
    </div>
  );
}

function ProblemCode({ docco, code }) {
  if (!code) return null;
  return (
    <SyntaxHighlighter language="java" style={docco} wrapLines={true}>
      {code}
    </SyntaxHighlighter>
  );
}
