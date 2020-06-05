import { useState, useEffect } from 'react';
import fetchData from './api';

const useData = () => {
  const [data, setData] = useState([]);
  const [tag, setTag] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const problems =
    tag === 'all' ? data : data.filter((entry) => entry['tags'].includes(tag));

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
        code: sheet[`E${i}`]?.v.trim(),
      });
    }
    setData(data);
  };

  return [tag, problems, isLoading, setTag];
};

export default useData;
