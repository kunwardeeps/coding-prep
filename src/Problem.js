import React from 'react';
import Container from '@material-ui/core/Container';
import { Tags } from './Tags';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SyntaxHighlighter from 'react-syntax-highlighter';

export function Problem({ problem, setTag }) {
  return (
    <Container maxWidth="lg">
      <span>&nbsp;&nbsp;</span>
      <ProblemTitle title={problem['title']} source={problem['source']} />
      <Tags updateRows={setTag} tags={problem['tags']} />
      <ProblemApproach approach={problem['approach']} />
      <ProblemCode docco={docco} code={problem['code']} />
      <span>&nbsp;&nbsp;</span>
    </Container>
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

function ProblemCode({ code }) {
  if (!code) return null;
  return (
    <SyntaxHighlighter language="java" style={docco} wrapLines={true}>
      {code}
    </SyntaxHighlighter>
  );
}
