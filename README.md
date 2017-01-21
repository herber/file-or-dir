# File or dir
> Check if a path is a file or a directory

## Installation
```bash
npm install --save file-or-dir
```

## Usage
```javascript
const check = require('file-or-dir');

const path = 'my-file'

if (check(path) == 'file') {
  console.log(path + ' is a file');
} else if (check(path) == 'dir') {
  console.log(path + ' is a dir');
}
```


> Working example in [test.js](https://github.com/tobihrbr/file-or-dir/blob/master/test.js)

## License
MIT
