/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     const stringArray = this.split(" ");
     let jadenString = '';
     stringArray.forEach((word, index) => {
       return jadenString += `${word.charAt(0).toUpperCase()}${word.slice(1)}${index < stringArray.length - 1 ? ' ' : ''}`;
     })
     
     return jadenString;
   }
  }
);

// The code above will not work in the browser, but it will work in Node.js.
