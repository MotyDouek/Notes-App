const fs = require('fs');

// const book = {
//     title: 'Mambo',
//     autor: 'Nana Banana'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const datdBuffer = fs.readFileSync('1-json.json'); //getting binary data
const dataJSON = datdBuffer.toString(); //making the data to string
console.log(datdBuffer.toString());

const data = JSON.parse(dataJSON); //make the data to a JSON
data.name = 'Moty';
data.age = 29;

const userJSON = JSON.stringify(data);

fs.writeFileSync('1-json.json', userJSON);