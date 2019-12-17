import EventEmitter from "events";
import AppDispatcher from "./ActionDispatcher";
import uniqueId  from "lodash/uniqueId";

let items = [
  { value: "Pants", id: uniqueId(), packed: false },
  { value: "Jacket", id: uniqueId(), packed: false },
  { value: "iPhone Charger", id: uniqueId(), packed: false },
  { value: "MacBook", id: uniqueId(), packed: false },
  { value: "Sleeping Pills", id: uniqueId(), packed: true },
  { value: "Underwear", id: uniqueId(), packed: false },
  { value: "Hat", id: uniqueId(), packed: false },
  { value: "T-Shirts", id: uniqueId(), packed: false },
  { value: "Belt", id: uniqueId(), packed: false },
  { value: "Passport", id: uniqueId(), packed: true },
  { value: "Sandwich", id: uniqueId(), packed: true }
];

class itemStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      if (action.type === "ADD_NEW_ITEM") {
        return this.addItem(action.payload);
      }

      if (action.type === "REMOVE_ITEM") {
        return this.removeItem(action.payload);
      }

      if (action.type === "TOGGLE_ITEM") {
        return this.updateItem(action.payload);
      }
    });
  }

  getItems() {
    return items;
  }

  addItem(itemsToAdd) {
    items = [...items, itemsToAdd];
    this.emit("change");
  }

  removeItem(itemToRemove) {
    items = items.filter(item => item.id !== itemToRemove.id);
    this.emit("change");
  }

  updateItem(updatedItem) {
    items = items.map(item => {
      if (item.id !== updatedItem.id) return item;
      return updatedItem;
    });
    this.emit("change");
  }
}

export default new itemStore();
