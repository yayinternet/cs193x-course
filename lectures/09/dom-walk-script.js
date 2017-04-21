function walkTree(root, level) {
  if (root.nodeType == Node.TEXT_NODE) {
    console.log(level + 'text:' + root.textContent);
  } else {
    console.log(level + root.nodeName);
  }
  for (const child of root.childNodes) {
    walkTree(child, level + "    ");
  }
}

walkTree(document.querySelector('html'), "");
