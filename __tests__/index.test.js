import gendiff from '../src/index.js';

const result = 
`{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50 
 + timeout: 20
 + verbose: true
}`; 

test('gendiff', () => {
 expect(gendiff('file1.json', 'file2.json')).toEqual(result);
});
