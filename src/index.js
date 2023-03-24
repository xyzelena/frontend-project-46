import readFile from './readFile.js';

const gendiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  console.log(file1);  
};

//gendiff('file1.json', 'file2.json'); 

export default gendiff; 
