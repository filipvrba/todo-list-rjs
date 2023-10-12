export default class ElmTodo extends HTMLElement {
  get () {
    return this._
  };

  constructor() {
    super();
    let urlDb = this.getAttribute("url-db");

    Net.getJson(urlDb, (obj) => {
      this._todoObj = obj;
      this._storage = new Storage(this._todoObj);
      return this.initElm()
    });

    window.inputChange = this.inputChange.bind(this)
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let lLiDom = () => {
      let domResult = [];

      this._todoObj.checklist.forEach((todo, i) => {
        let pos = i + 1;
        let id = `${pos}-${todo.idName()}`;
        let idInput = `${id}-input`;
        let domChecked = this._storage.getValue(id) ? "checked" : "";
        domResult.push(`${`
<li id='${id}' class='list-group-item border-0 d-flex align-items-center ps-0'>
  <div class='form-check'>
    <input id='${idInput}' class='form-check-input me-3' onchange='inputChange("${idInput}")' type='checkbox' value='' aria-label='...' ${domChecked} />
    <label class='form-check-label' for='${idInput}'>${todo}</label>
  </div>
</li>
        `}`);
        return
      });

      return domResult.join("\n")
    };

    let template = `${`
<div class='col col-lg-8 col-xl-6'>
  <div class='card rounded-3'>
    <div class='card-body p-4'>

      <p class='mb-2'><span class='h2 me-2'>${this._todoObj.header}</span> <span
      class='badge bg-danger'>checklist</span></p>
      <p class='text-muted pb-2'>${this._todoObj.date}</p>

      <ul class='list-group rounded-0'>
        ${lLiDom()} 
      </ul>
    </div>
  </div>
</div>
    `}`;
    return this.innerHTML = template
  };

  inputChange(idInput) {
    let input = document.getElementById(idInput);
    let isChecked = input.hasAttribute("checked");

    if (isChecked) {
      input.removeAttribute("checked")
    } else {
      input.setAttribute("checked", "")
    };

    return this._storage.set()
  }
}