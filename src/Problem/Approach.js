import React from 'react';
import Typography from '@material-ui/core/Typography';

export function Approach({ approach }) {
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
