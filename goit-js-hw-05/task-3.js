
class Storage {

    constructor (items){
        this.items = items;
    };
        // getItems (){
        //    return this.items;
        // };
        
        // addItem(item){
        // return this.items.push(item);
        // };

        // removeItem(item){
        //     this.items = this.items.filter((n) => {return n != item});
        // }
    };
    Storage.prototype.getItems = function() { return this.items;}
    Storage.prototype.addItem = function(item) { return this.items.push(item);}
    Storage.prototype.removeItem = function(item) { this.items = this.items.filter((n) => {return n != item});}

    const storage = new Storage(["Яблоко", "Киви", "Арбуз", "Ананас"]); 
    
    storage.getItems();
    storage.addItem("МАНГО") 
    storage.removeItem("Яблоко") 
    console.log(storage.getItems())
     
   
    

