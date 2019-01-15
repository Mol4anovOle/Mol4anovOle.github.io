let m=30;
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


for (let i = 2; i <= m; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}


for (let i = 2; i <= m; i++) {
  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    console.log(i);
  }

  prime = false;
}
let i;
for(i=1; i<=100; i++){
  if ((i%3==0)&& (i%5==0)) console.log (i + 'FizzBuzz');
  else if ((i%3==0)&& (i%5!==0)) console.log (i + 'Fizz');
  else if ((i%3!==0)&& (i%5==0)) console.log (i + 'Buzz');
}



//Codewars

task even or Odd
function even_or_odd( number) {
  if ((number % 2)==0){
  return 'Even';
  } else
  return 'Odd';
}


////task make Negative
function makeNegative(num) {
  if (num < 0){
  return num;
  
  } else 
  return -num ;
}

//task secret Message
function greet(name){
if(name !== "Johnny"){
  return "Hello, " + name + "!";
  } else
    return "Hello, my love!";
}

//task loveFunc
function lovefunc(flower1, flower2){
let numFlower=flower1+flower2;
 if ((numFlower % 2  ==0) || (numFlower == 0)){
 return false;
 } else
 return true;
}

//task bool Yes or No
function boolToWord( bool ){
if (bool == 0){
return  bool='No';
} else 
return  bool='Yes';
}

//task Car cost 
function rentalCarCost(d) {
 let fullCost=40;
 let discount3=20;
 let discount7=50;
 let fullCar;
 if (d<3) {
 return fullCar = d*fullCost;
 }
 else if (d<7) {
 return fullCar = (d*fullCost-discount3);
} else  
 return fullCar = (d*fullCost-discount7);
 }