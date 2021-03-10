class User {
    constructor(name, age, followers){
        this.name = name;
        this.age = age;
        this.followers = followers;
        this.getInfo = function(){
            return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
        };
    }
};


const mango = new User ("Mango", 2, 20);
console.log(mango)
console.log(mango.getInfo());

const poly = new User ("Poly", 3, 17);
console.log(poly)
console.log(poly.getInfo());