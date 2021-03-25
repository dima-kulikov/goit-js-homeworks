// Напиши класс Car с указанными свойствами и методами.

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  /*
   * Конструктор получает объект настроек.
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
    constructor(obj) {
        this.speed = 0;
        this.price = obj.price;
        this.maxSpeed = obj.maxSpeed;    
        this.isOn = false;
        this.distance = 0;
        }
      
        static getSpecs(car) {
          console.log(car);
        }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get newPrise(){
    return this.price = obj.price;
  };
  // set newPrise()
  
  
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
   
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if( value < this.maxSpeed){
      return this.speed = value;
    }
  }
  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if( this.speed > 0){
        return this.speed = this.speed - value
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if(this.isOn = true){
        return this.distance = hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang)
mustang.turnOn();
console.log(mustang.isOn)


mustang.accelerate(50);
console.log(mustang.speed)
mustang.drive(2);
console.log(mustang.distance)

Car.getSpecs(mustang);
console.log(mustang)
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
console.log(mustang.speed)
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
console.log(mustang)
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000





