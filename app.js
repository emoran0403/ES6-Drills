function favMovie(name = "Tommy Wiseau", movie = "The Room") {
  // 'The Room' has been set as a default value, this will be used when there is no argument passed
  console.log(`My name is ${name}, and my favorite movie is ${movie}`);
}

//favMovie("Eric", "Forrest Gump");
// when called without passing an argument, it will use 'undefined'
// with the default set, and no argument, it will use the default
// when called with an argument, it will use the argument
// when called with both arguments, it will use both.

function favMovie2() {
  console.log("this is a normally declared function.");
}

let favMovie3 = () => {
  console.log("this is an arrow function with no parameters.");
};

let favMovie4 = (paramHere) => {
  console.log(`this is an arrow function with one ${paramHere}`);
};

let favMovie5 = (paramHere) => {
  // my autoformatter is adding parentheses around this parameter
  console.log(
    `this is an arrow function with one ${paramHere} and no parentheses around the parameter`
  );
};

let favMovie6 = (paramHere, paramTwo) => {
  console.log(
    `this is an arrow function with two parameters, the first being ${paramHere} and the second being ${paramTwo}.  Parentheses are needed for 0 and 2+ parameters`
  );
};

let getFirstName = (firstName) => {
  // this function is given the first name, then logs the first name
  console.log(`The first name is ${firstName}`);
};

let getFirstNameConcise = (stringHere) => {
  // this function is given a string, then cuts the string based on empty spaces.
  // these 'substrings' are returned as an array.
  // [0] at the end will call the first substring from the array
  let firstName = stringHere.split(" ")[0];
  console.log(`The first name is ${firstName}`);
};

getFirstName("eric");
getFirstNameConcise("Eric Moran");

console.log("-----------------------");

let doMath = (x, y) => {
  //*! this is not working
  let exponent = x ^ y;
  let product = x * y;
  let objectLiteral = {
    exponent,
    product,
  };
  return { exponent, product };
};

doMath(2, 3);
