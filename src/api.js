import XLSX from 'xlsx';

const URL =
  'https://raw.githubusercontent.com/kunwardeeps/coding-prep/master/Leetcode_Approach.xlsx';

const fetchData = async () => {
  const res = await fetch(URL);
  if (!res.ok) throw new Error('fetch failed');
  const buffer = await res.arrayBuffer();

  return readDataFromXLSX(buffer);
};

export default fetchData;

function readDataFromXLSX(buffer) {
  const respArr = new Uint8Array(buffer);
  const workbook = XLSX.read(respArr, { type: 'array' });
  return workbook.Sheets.Algos;
}
