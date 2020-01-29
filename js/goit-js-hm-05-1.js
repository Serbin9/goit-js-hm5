`use strict`;
// Вариант 1====================================================================
// const Account = function( login, email ) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function(){
//   console.log(`Login ${this.login}, Email ${this.email}`); // function
// };

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// // console.log(mango)
// const poly = new Account("Poly", "poly@mail.com");
// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// // console.log(poly)


// Вариант 2================================================================ 

const Account = function({login, email}) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function(){
console.log(`Login: ${this.login}, Email: ${this.email}`); // function
};
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com