function favMovie(name = "Tommy Wiseau", movie = "The Room") {
  // 'The Room' has been set as a default value, this will be used when there is no argument passed
  console.log(`My name is ${name}, and my favorite movie is ${movie}`);
}

favMovie("Eric", "Forrest Gump");
// when called without passing an argument, it will use 'undefined'
// with the default set, and no argument, it will use the default
// when called with an argument, it will use the argument
// when called with both arguments, it will use both.
