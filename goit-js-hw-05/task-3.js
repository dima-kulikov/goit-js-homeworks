class Storage {
constructor (apple){
    this.apple = apple;
    // - возвращает массив текущих товаров
    this.getItems = function(){
        return this.apple;
    };
    // - получает новый товар и добавляет его к текущим
this.addItem = function(banana){
    return items.push(banana);
};
}};
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']); 

  const items = storage.getItems();
  console.log(items)


  storage.addItem('Дроид');
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]