'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const str = document.querySelector('textarea').value;
  const strSeperatedByNewLine = str.split('\n');
  let f = [];
  for (let i = 0; i < strSeperatedByNewLine.length; i++) {
    let s = strSeperatedByNewLine[i].trim().split('_');
    for (let j = 1; j < s.length; j++) {
      s[j] = s[j].replace(s[j][0], s[j][0].toUpperCase());
    }
    s = s.join('');
    console.log(s.padEnd(15, ' '), '✅'.repeat(i + 1));
  }
});
