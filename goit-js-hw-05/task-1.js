const Account = function (login, email){
    this.login = login;
    this.email = email;
};

Account.prototype.getInfo = function() {
    return ` Login: ${this.login},  E-mail: ${this.email}`;
 }
 console.log(Account.prototype.getInfo); 

const mango = new Account('Mangozedog','mango@dog.woof');
console.log(mango.getInfo());


const poly = new Account('Poly','poly@mail.com');
console.log(poly.getInfo());

 


