//task Dish &beast
function feast(beast, dish) {
let result;
let startName;
let endName;
startName = beast[0] === dish[0];
endName = beast[beast.length-1]===dish[dish.length-1];
result = startName && endName;
return result;
}
//task Two Word Name
function abbrevName(name){
let arr = name.split (' ');
let firstName = arr[0];
let surName = arr[1];
let initials = firstName[0]+ '.' + surName[0];
return initials;

}

//task Hello
function hello(name) {
let nameLowCase=name.toLowerCase();
let firstLetter=nameLowCase[0].toUpperCase();
let nameNormal=firstLetter+ nameLowCase.substring(1);
let helloName ='Hello,'+' ' +nameNormal;
return helloName;
}

//leetcode



//task Palindrom 
function isPalindrome(str) {
let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) { 
        result =  'да, это паллиндром';
      } else 
        result = 'нет, попробуйте еще раз';
    }
    return result;
  }
