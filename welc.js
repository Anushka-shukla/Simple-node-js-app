// Local module must be written in a separate JavaScript file. In the separate file, we can declare a JavaScript object with different properties and methods.

// Step 1: Creating a local module with filename Welcome.js
// we declared an object ‘welcome’ with a function sayHello and two variables currTime and companyName. We use the module.export to make the object available globally.
const welcome = {
  
    sayHello : function() {
        console.log("Hello GeekforGeeks user");
  },
  
  currTime : new Date().toLocaleDateString(),
  
  companyName : "GeekforGeeks"
}
  
module.exports = welcome