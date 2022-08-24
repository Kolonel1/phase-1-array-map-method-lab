const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


/*function split(string){
  return string.split(' ');
}
newTitleCased = tutorials.map(split);
console.log(newTitleCased);

function join(string){
  return string.join(' ');
}
newTitleCased.map(join);
console.log(newTitleCased);*/

//i have seen something difficult to achieve
function capitalizeTheFirstLetterOfEachWord(words){
  let separateWord = words.split(' '); //forget about the to lower case part
  for(let i=0; i<separateWord.length; i++){
    separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(' ');
  
}
console.log(capitalizeTheFirstLetterOfEachWord('this is crazy'));

//now to master how this join and charAt work
let test ='this is a test run'.split(' ');//so split creates a new array with the strings

console.log(test);
  
console.log(test.join(' '))
console.log(test); //it appears join is non-destructive
//i have not grasped this joining of toLowerCase and charAt
//is there like an order i think there is.you write them based on the order in which you want it to be executed
//split is destructive


/*const newTutorials = tutorials.map(capitalizeTheFirstLetterOfEachWord);
console.log(newTutorials);
console.log(titleCased());

function titleCased(){
  return tutorials
}
//nitamalizia baadaye */
function titleCased(){
 return tutorials.map(capitalizeTheFirstLetterOfEachWord)
}
console.log(titleCased())
