import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { MenuItems } from './MenuItems';
import { Tags } from './Tags';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export function Body({ tag, updateRows, rows }) {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.heroContent}>
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
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            A compilation of frequently asked coding questions.
          </Typography>
          <MenuItems
            tag={tag}
            handleChange={(event) => updateRows(event.target.value)}
          />
        </Container>
        {rows.map((entry, i) => (
          <div key={i}>
            <Container maxWidth="lg">
              <span>&nbsp;&nbsp;</span>
              <Typography
                variant="h3"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                {entry['source'] ? (
                  <Link
                    target={'_blank'}
                    color={'inherit'}
                    href={entry['source']}
                  >
                    {entry['title']}
                  </Link>
                ) : (
                  entry['title']
                )}
              </Typography>
              <Tags updateRows={updateRows} entry={entry} />
              {entry['approach'] && (
                <div className="approach">
                  <Typography
                    variant="h5"
                    align="left"
                    color="textPrimary"
                    gutterBottom
                  >
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
                    {entry['approach']}
                  </Typography>
                </div>
              )}
              {entry['code'] && (
                <SyntaxHighlighter
                  language="java"
                  style={docco}
                  wrapLines={true}
                >
                  {entry['code']}
                </SyntaxHighlighter>
              )}
              <span>&nbsp;&nbsp;</span>
            </Container>
          </div>
        ))}
      </div>
    </main>
  );
}
