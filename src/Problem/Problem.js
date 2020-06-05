import React from 'react';
import Container from '@material-ui/core/Container';
import { Tags } from './Tags';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Title } from './Title';
import { Approach } from './Approach';
import { Code } from './Code';

export function Problem({ problem, setTag }) {
  const { title, source, tags, approach, code } = problem;
  return (
    <Container maxWidth="lg">
      <br />
      <Title title={title} source={source} />
      <Tags updateRows={setTag} tags={tags} />
      <Approach approach={approach} />
      <Code docco={docco} code={code} />
      <br />
    </Container>
  );
}
