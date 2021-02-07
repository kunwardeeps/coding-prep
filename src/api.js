import XLSX from 'xlsx';

const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSIBV_awyyv6iQcTHXpKJ5QPC2MM4pvgSamylZLGBXnj76J9pGwdewXytUKo3D4FVsCAzfnE6V8heC2/pub?output=xlsx';

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
