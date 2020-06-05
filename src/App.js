import React, { useState, useEffect } from 'react';
import XLSX from 'xlsx';
import AppBar from '@material-ui/core/AppBar';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MenuItems } from './MenuItems';
import GitHubForkRibbon from 'react-github-fork-ribbon';

import Link from '@material-ui/core/Link';

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
  loader: {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  tags: {
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  }
}));
  
export default function App() {
  const classes = useStyles();

  const [ data, _setData ] = useState([]);
  const [ rows, _setRows ] = useState([]);
  const [ tag, setTag ] = useState('all');
  const [ isLoading, setIsLoading ] = useState(true);

  const handleChange = (event) => {
    updateRows(event.target.value);
  };

  const updateRows = (tag) => {
    setTag(tag);
    if (tag === 'all') {
      _setRows(data);
    } else {
      _setRows(data.filter(entry => entry['tags'].includes(tag)));
    }
  };

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/kunwardeeps/coding-prep/master/Leetcode_Approach.xlsx";
    fetch(url).then(function(res) {
      if(!res.ok) throw new Error("fetch failed");
      return res.arrayBuffer();
    }).then(ab => {
      const respArr = new Uint8Array(ab);
      const workbook = XLSX.read(respArr, {type:"array"});
      setData(workbook.Sheets.Algos);
      setIsLoading(false);
    });
  }, []);

  const setData = (sheet) => {
    let data = [];
    for (let i = 2; sheet['A' + i]; i++) {
      let entry = {};
      entry['title'] = sheet['A' + i].v;
      entry['source'] = sheet['B' + i] && sheet['B' + i].v;
      entry['tags'] = sheet['C' + i] && sheet['C' + i].v.replace(/\s+/g, '').split(',');
      entry['approach'] = sheet['D' + i] && sheet['D' + i].v;
      entry['code'] = sheet['E' + i] && sheet['E' + i].v;
      data.push(entry);
    }
    _setData(data);
    _setRows(data);
  }

  const getTagLinks = (tags) => {
    return tags.map((tag, i) => 
      <Link key={i} onClick={() => updateRows(tag)} href='#'>{tag}
      </Link>);
  }
  
  return (
    isLoading? 
    <div className={classes.loader}>
      <CircularProgress  size={200} disableShrink/>
    </div> :
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <GitHubForkRibbon position="right" 
                          color="green"
                          href="//github.com/kunwardeeps/coding-prep" 
                          target="_blank" > 
          Fork me on GitHub 
        </GitHubForkRibbon> 
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
            <MenuItems tag={tag} handleChange={handleChange} />
          </Container>
          {rows.map((entry, i) => 
          <div key={i}>
            <Container maxWidth="lg">
              <span>&nbsp;&nbsp;</span>
              <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                {entry['source'] ? <Link target={'_blank'} color={'inherit'} href={entry['source']}>{entry['title']}</Link> :
                entry['title']}
              </Typography>
              <Typography variant="subtitle1" align="left" color="textSecondary" paragraph>
                <span>Tags: </span>
                <span className={classes.tags}>
                  {getTagLinks(entry['tags'])}
                </span>
              </Typography>
              {entry['approach'] &&
              <div className="approach">
                <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                  Approach
                </Typography>
                <Typography style={{ whiteSpace: 'pre-wrap' }} variant="body2" align="left" color="textPrimary" gutterBottom>
                  {entry['approach']}
                </Typography>
              </div>}
              {entry['code'] && 
              <SyntaxHighlighter language="java" style={docco} wrapLines={true}>
                {entry['code']}
              </SyntaxHighlighter>}
              <span>&nbsp;&nbsp;</span>
            </Container>
          </div>)}
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Coding Prep
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thanks for visiting!
        </Typography>
      </footer>
    </React.Fragment>
  );
}