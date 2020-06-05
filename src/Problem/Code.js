import React from 'react';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

export function Code({ code }) {
  if (!code) return null;
  return (
    <SyntaxHighlighter language="java" style={docco} wrapLines={true}>
      {code}
    </SyntaxHighlighter>
  );
}
