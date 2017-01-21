const fileordir = require('./lib/app.js');

if (fileordir('README.md') == 'file') {
  console.log('file');
} else {
  console.log('not a file');
}

if (fileordir('lib') == 'dir') {
  console.log('directory');
} else {
  console.log('not a directory');
}
