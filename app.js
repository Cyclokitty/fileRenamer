const fs = require('fs');

fs.rename('renameThis.txt', 'catDocs.txt', err  => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('File renaming successful.');
  }
});
