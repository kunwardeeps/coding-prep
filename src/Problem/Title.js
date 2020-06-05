import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export function Title({ title, source }) {
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
