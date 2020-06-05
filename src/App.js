import { Body } from './Body';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Footer';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import { Loading } from './Loading';
import useData from './useData';

export default function App() {
  const [tag, rows, isLoading, setTag] = useData();

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
