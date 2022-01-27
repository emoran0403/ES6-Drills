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
  // my autoformatter is adding parentheses around this parameter, but it can be declared without parentheses, since it requires only 1 parameter
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
  console.log(
    `The first name is ${firstName}, I was just passed a nice easy single argument`
  );
};

let getFirstNameConcise = (stringHere) => {
  // this function is given a string, then cuts the string based on empty spaces.
  // these 'substrings' are returned as an array.
  // [0] at the end will call the first substring from the array
  let firstName = stringHere.split(" ")[0];
  console.log(
    `The first name is ${firstName}, I was just passed a string, which i did some magic on to get just the first name`
  );
};

getFirstName("eric");
getFirstNameConcise("Eric Moran");

console.log("Object literals below:");

let myMathObject = {
  getExponent: (x, y) => {
    return x ** y;
  },

  getProduct: (x, y) => {
    return x * y;
  },
};

console.log(
  `This is me calling the getExponent method (but really it is a property) from myMathObject, it should be 8: ${myMathObject.getExponent(
    2,
    3
  )}`
);

console.log(
  `This is me calling the getProduct method (but really it is a property) from myMathObject, it should be 6: ${myMathObject.getProduct(
    2,
    3
  )}`
);

console.log("Cool spread stuff below");

let spreadSyntaxFunc = (name, location, favFood) => {
  console.log(
    `Hi, my name is ${name}, I live in ${location}, and my favorite food is ${favFood}`
  );
};

let thisArray = ["Ervin Howell", "Andrew's nightmares", "template literals"];

spreadSyntaxFunc(...thisArray); // i do not use [...thisArray], instead the elipses go before the array name

let myNameVariable = "Eric Moran";

let notAnotherFunction = (param) => {
  let aNewArray = [...myNameVariable];
  // spreading through an array gives each item from that array
  // spreading through a string gives each character from that string

  for (let i = 0; i < aNewArray.length; i++) {
    console.log(`${aNewArray[i]} is the value at index: ${i}`);
  }
};

notAnotherFunction(myNameVariable);
