// Analysis ID '(0)-(1)-(2)':
// (0): is position id from array
// (1): is short todo name
// (2): is boolean
export default class Storage {
  constructor(todoObj) {
    this._todoObj = todoObj
  };

  id() {
    return this._todoObj.date.replaceAll(/[\/\s\.\-]/g, "") + this._todoObj.header.idName()
  };

  get() {
    let value = localStorage.getItem(this.id());

    if (value) {
      return value
    } else {
      localStorage.length = 0;
      return null
    }
  };

  set() {
    let aItem = [];

    this._todoObj.checklist.forEach((todo, i) => {
      let pos = i + 1;
      let _id = `${pos}-${todo.idName()}`;
      let idInput = `${_id}-input`;
      let isChecked = document.getElementById(idInput).hasAttribute("checked") ? 1 : 0;
      let item = `${_id}-${isChecked}`;
      return aItem.push(item)
    });

    let items = aItem.join(Storage.SYM_SPLIT);

    if (items) {
      localStorage.setItem(this.id(), items);
      return true
    } else {
      return false
    }
  }
};

Storage.SYM_SPLIT = "|"