/**
 * Declear Varialbe
 *
 * 1) var - no more in use.
 * 2) let
 * 3) const
 */

var name = "JavaScript";
console.log(name);


var age = 30;
console.log(age);

let country = "South Korea";
console.log(country);

/**
 * Declearing variable with let & var
 * allows variable update
 */

country = "United Kingdom";
console.log(country);

const city = "Incheon";
console.log(city);

// city = "London"; // returning error (TypeError: Assignment to constant variable.)

/**
 * Declear & Initialisation
 * let name -> Declear
 * = "Jingyu" -> Initialisation
 */

let wife;  // Allowed
console.log(wife); // undefined

// const wife2;  // Not allowed