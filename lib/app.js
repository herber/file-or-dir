const file = require('file-check');
const dirc = require('dir-check');

module.exports = function (path) {
  if (file(path)) {
    return 'file';
  } else if (dirc(path)) {
    return 'dir';
  } else {
    return false;
  }
};
