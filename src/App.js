import React, { useState, useEffect } from 'react';
import XLSX from 'xlsx';
import AppBar from '@material-ui/core/AppBar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const columns = ['A', 'B', 'C', 'D', 'E'];
  
export default function App() {
  const classes = useStyles();

  const [ data, setData ] = useState({});

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/kunwardeeps/coding-prep/master/Leetcode_Approach.xlsx";
    fetch(url).then(function(res) {
      /* get the data as a Blob */
      if(!res.ok) throw new Error("fetch failed");
      return res.arrayBuffer();
    }).then(ab => {
      /* parse the data when it is received */
      var data = new Uint8Array(ab);
      var workbook = XLSX.read(data, {type:"array"});
      console.log(workbook.Sheets.Algos);
      setData(workbook.Sheets.Algos);
      setIsLoading(false);
    });
  }, []);
  
  return (
    isLoading? <div>Loading</div> :
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar/>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Coding Prep
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A compilation of frequently asked coding questions.
            </Typography>
          </Container>
          <Container maxWidth="lg">
            <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
              {data.A2.v}
            </Typography>
            {data.B2 && <Typography variant="subtitle1" align="left" color="textSecondary" paragraph>
               <a href={data.B2.v}>Source</a>
            </Typography>}
            <Typography variant="subtitle1" align="left" color="textSecondary" paragraph>
              Tags: {data.C2.v}
            </Typography>
            {data.D2 && 
            <Typography variant="h5" align="left" color="textSecondary" gutterBottom>
              Approach
            </Typography> &&
            <Typography variant="body1" align="left" color="textSecondary" gutterBottom>
              {data.D2.v}
            </Typography>}
            <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
              Code
            </Typography>
            {data.E2 && 
            <SyntaxHighlighter language="java" style={docco}>
              {data.E2.v}
            </SyntaxHighlighter>}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}