import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { MenuItems } from './MenuItems';

export function Heading({ tag, setTag }) {
  return (
    <Container maxWidth="md">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Coding Interview Prep
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Preferred approach of problems organized by patterns
      </Typography>
      <MenuItems
        tag={tag}
        handleChange={(event) => setTag(event.target.value)}
      />
    </Container>
  );
}
