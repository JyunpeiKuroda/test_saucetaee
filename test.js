// D004:文字列の結合
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {

  const numbers = lines;
  const editNumber = numbers.slice(1);  // 先頭の数字を消している。
  const ans = `Hello ${editNumber}.`;   // テンプレートで文字列を結合して表示。
  console.log(ans);                     // Hello Alice,Bob,Carol,Dave,Ellen.

});