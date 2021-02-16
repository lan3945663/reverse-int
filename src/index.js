module.exports = function reverse(n) {
  let str;
  let reversedStr = '';

  if(n < 0) {
    str = String(-1 * n);
  } else {
    str = String(n);
  } 
  
  for(let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  const res = Number(reversedStr)
  return res
}