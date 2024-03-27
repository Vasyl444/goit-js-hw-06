"use strict";
class Storage {
    #items = [];
    constructor(items) {
        this.#items = items;
    }

        getItems() {
            return this.#items;
        }
        addItem(newItem) {
            this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        const array = [];
        for (let item of this.#items) {
            if (item !== itemToRemove) {
                array.push(item);
            }
        }
        return this.#items = array;
    }
    /*
    Другий спосіб вирішення завдання по removeItem :
    removeItem(itemToRemove) {
       if (this.#items.includes(itemToRemove)) {
           this.#items.splice(this.#items.indexOf(itemToRemove), 1);
        }
    } 
    */
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]v