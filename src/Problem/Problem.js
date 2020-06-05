import React from 'react';
import Container from '@material-ui/core/Container';
import { Tags } from './Tags';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Title } from './Title';
import { Approach } from './Approach';
import { Code } from './Code';

export function Problem({ problem, setTag }) {
  return (
    <Container maxWidth="lg">
      <br />
      <Title title={problem['title']} source={problem['source']} />
      <Tags updateRows={setTag} tags={problem['tags']} />
      <Approach approach={problem['approach']} />
      <Code docco={docco} code={problem['code']} />
      <br />
    </Container>
  );
}
