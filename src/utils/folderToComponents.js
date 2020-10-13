export default function folderToComponent(file) {
  let initialPath = '';
  let components = [];

  function c(x, path) {
    x.forEach(f => {
      if (f.type === 'directory') {
        initialPath += `${f.name}/`;
        c(f.children, initialPath);
        initialPath = path ? `${path}` : '';
      } else {
        components.push({
          name: `${initialPath}${f.name}`,
          type: f.type,
          source: f.source,
        });
      }
    });
  }
  c(file);
  return components;
}
