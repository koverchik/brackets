module.exports = function check(str, bracketsConfig) {
  let strArray = str.split('');
  let result = false;
  function checkString() {
    for (let i = 0; i < bracketsConfig.length; i++) {
      let centre = bracketsConfig[i].join('');
      let firstBrasket = str.indexOf(centre, 0);
      if(str.indexOf(centre, 0) != -1){
        let indexStart = str.indexOf(centre, 0);
        let indexEnd =  str.indexOf(bracketsConfig[i][1], indexStart);

        if(str.length != (indexStart+1)*2){

          str = str.slice((indexStart+1)*2);
          checkString(str, bracketsConfig);

        } else if(!(indexStart+indexEnd)%2 == 0){
          checkBrasket(str, bracketsConfig);

        }

      }else {
        result = false;
      }
    }
  }
  function checkBrasket(str, bracketsConfig) {
  let checkArray = [];
    for (let a = 0; a < str.length/2; a++) {
      for (let i = 0; i < bracketsConfig.length; i++) {
       if (bracketsConfig[i][0] == str[a]){
      checkArray.push(bracketsConfig[i][1]);
      }
    }
  }
  let stringCheak = str.slice(0, str.length/2) + checkArray.reverse().join("");
  if(str == stringCheak){
    result = true;
  }else{
    result = false;
  }
  }
  checkString();
  return result;
}
