module.exports = function check(str, bracketsConfig) {
  // your solution
  var stack = [];
  for (var i = 0; i < bracketsConfig.length; i++) {
    stack.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }
  var prevValue;
  while (str.length !== 0) { 
    if (str === prevValue) {
      return false;
    }   
    prevValue = str;
    for (var i = 0; i < stack.length; i++) {
      str = str.replace(stack[i], '');
    }  
  }
  return true;
}
