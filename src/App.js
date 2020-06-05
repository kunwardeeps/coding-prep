import { Body } from './Body';
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Footer';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import { Loading } from './Loading';
import fetchData from './api';

export default function App() {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [tag, setTag] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (tag === 'all') {
      setRows(data);
    } else {
      setRows(data.filter((entry) => entry['tags'].includes(tag)));
    }
  }, [tag, data]);

  useEffect(() => {
    (async function () {
      const sheetData = await fetchData();
      updateDataFromSheet(sheetData);
      setIsLoading(false);
    })();
  }, []);

  const updateDataFromSheet = (sheet) => {
    let data = [];
    for (let i = 2; sheet[`A${i}`]; i++) {
      data.push({
        title: sheet[`A${i}`].v,
        source: sheet[`B${i}`]?.v,
        tags: sheet[`C${i}`]?.v.replace(/\s+/g, '').split(','),
        approach: sheet[`D${i}`]?.v,
        code: sheet[`E${i}`]?.v,
      });
    }
    setData(data);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <CssBaseline />
      <GithubRibbon />
      <Body tag={tag} setTag={setTag} rows={rows} />
      <Footer />
    </>
  );
}

function GithubRibbon() {
  return (
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
  );
}
