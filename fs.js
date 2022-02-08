// Module that works with local filesystem
const fs = require('fs');

// fs.writeFile('test-message.txt', "Hello there node", (err) => {
//     if(err) throw err;
    
//     console.log('File has been written')
// })

fs.readFile('./test-message.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data)
})