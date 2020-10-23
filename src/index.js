module.exports = function check(str, bracketsConfig) {
  let strArray = str.split('');
  let strBracket = bracketsConfig.flat().join("");
  let result = true;

  strArray.forEach(function callback(currentValue, index, array) {

    let firstElem = strArray.shift();
    let arrayBracket = strBracket.indexOf(firstElem, 0);

    if(strArray.indexOf(strBracket[arrayBracket+1]) != -1 && strArray.indexOf(strBracket[arrayBracket+1])%2 == 0){
      delete strArray[strArray.indexOf(strBracket[arrayBracket+1])];
    }else{

    return result = false;
    }
  });


  return result;
}
