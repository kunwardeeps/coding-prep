import { Body } from './Body';
import React, { useState, useEffect } from 'react';
import XLSX from 'xlsx';
import AppBar from '@material-ui/core/AppBar';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from './Footer';
import GitHubForkRibbon from 'react-github-fork-ribbon';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  loader: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default function App() {
  const classes = useStyles();

  const [data, _setData] = useState([]);
  const [rows, _setRows] = useState([]);
  const [tag, setTag] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event) => {
    updateRows(event.target.value);
  };

  const updateRows = (tag) => {
    setTag(tag);
    if (tag === 'all') {
      _setRows(data);
    } else {
      _setRows(data.filter((entry) => entry['tags'].includes(tag)));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://raw.githubusercontent.com/kunwardeeps/coding-prep/master/Leetcode_Approach.xlsx';
      const res = await fetch(url);
      if (!res.ok) throw new Error('fetch failed');
      const ab = await res.arrayBuffer();

      const respArr = new Uint8Array(ab);
      const workbook = XLSX.read(respArr, { type: 'array' });
      setData(workbook.Sheets.Algos);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const setData = (sheet) => {
    let data = [];
    for (let i = 2; sheet['A' + i]; i++) {
      let entry = {};
      entry['title'] = sheet['A' + i].v;
      entry['source'] = sheet['B' + i] && sheet['B' + i].v;
      entry['tags'] =
        sheet['C' + i] && sheet['C' + i].v.replace(/\s+/g, '').split(',');
      entry['approach'] = sheet['D' + i] && sheet['D' + i].v;
      entry['code'] = sheet['E' + i] && sheet['E' + i].v;
      data.push(entry);
    }
    _setData(data);
    _setRows(data);
  };

  return isLoading ? (
    <div className={classes.loader}>
      <CircularProgress size={200} disableShrink />
    </div>
  ) : (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <GitHubForkRibbon
          position="right"
          color="green"
          href="//github.com/kunwardeeps/coding-prep"
          target="_blank"
        >
          Fork me on GitHub
        </GitHubForkRibbon>
      </AppBar>
      <Body
        tag={tag}
        handleChange={handleChange}
        updateRows={updateRows}
        docco={docco}
        rows={rows}
      />
      <Footer />
    </>
  );
}
