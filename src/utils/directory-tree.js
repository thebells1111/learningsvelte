const FS = require('fs');
const PATH = require('path');
const constants = {
  DIRECTORY: 'directory',
  FILE: 'file',
};

function safeReadDirSync(path) {
  let dirData = {};
  try {
    dirData = FS.readdirSync(path);
  } catch (ex) {
    if (ex.code == 'EACCES' || ex.code == 'EPERM') {
      //User does not have permissions, ignore directory
      return null;
    } else throw ex;
  }
  return dirData;
}

function normalizePath(path) {
  return path.replace(/\\/g, '/');
}

function directoryTree(path) {
  const name = PATH.basename(path);
  path = normalizePath(path);
  const item = { path, name };
  let stats;

  try {
    stats = FS.statSync(path);
  } catch (e) {
    return null;
  }

  if (stats.isFile()) {
    const ext = PATH.extname(path);
    item.name = item.name.slice(0, -ext.length);
    item.type = ext.slice(1);
    item.source = FS.readFileSync(path, 'utf-8');
  } else if (stats.isDirectory()) {
    let dirData = safeReadDirSync(path);
    if (dirData === null) return null;
    item.children = dirData
      .map((child) => directoryTree(PATH.join(path, child)))
      .filter((e) => !!e);
    item.type = constants.DIRECTORY;
  } else {
    return null; // Or set item.size = 0 for devices, FIFO and sockets ?
  }
  return item;
}

module.exports = directoryTree;
