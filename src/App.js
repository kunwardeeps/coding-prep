import React, { useState, useEffect } from 'react';
import XLSX from 'xlsx';
import AppBar from '@material-ui/core/AppBar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CssBaseline from '@material-ui/core/CssBaseline';
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
  
export default function App() {
  const classes = useStyles();

  const [ rows, _setRows ] = useState([]);

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
      console.log(workbook);
      setRows(workbook.Sheets.Algos);
      setIsLoading(false);
    });
  }, []);

  const setRows = (data) => {
    let rows = [];
    for (let i = 2; data['A' + i]; i++) {
        rows.push(
          <Container maxWidth="lg">
            <span>&nbsp;&nbsp;</span>
            <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
              {data['A' + i].v}
            </Typography>
            {data['B' + i] && 
            <Typography variant="subtitle1" align="left" color="textSecondary" paragraph>
              <a href={data['B' + i].v}>Source</a>
            </Typography>}
            <Typography variant="subtitle1" align="left" color="textSecondary" paragraph>
              Tags: {data['C' + i].v}
            </Typography>
            {data['D' + i] &&
            <div className="approach">
              <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                Approach
              </Typography>
              <Typography variant="body1" align="left" color="textPrimary" gutterBottom>
                {data['D' + i].v}
              </Typography>
            </div>}
            {data['E' + i] && 
            <div className="code">
              <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                Code
              </Typography>
              <SyntaxHighlighter language="java" style={docco} wrapLines>
                {data['E' + i].v}
              </SyntaxHighlighter>
            </div>}
            <span>&nbsp;&nbsp;</span>
          </Container>
        );
    }
    console.log(rows.length);
    _setRows(rows);
  };  
  
  return (
    isLoading? <div>Loading</div> :
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar/>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Coding Interview Prep
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A compilation of frequently asked coding questions.
            </Typography>
          </Container>
          {rows.map((row, i) => <div key={i}>{row}</div>)}
        </div>
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