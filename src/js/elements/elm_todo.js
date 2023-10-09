import todoObj from "../../json/todo.json";

export default class ElmTodo extends HTMLElement {
  constructor() {
    super();
    this.initElm()
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

      todoObj.checklist.forEach((todo, i) => {
        let pos = i + 1;
        let id = `${pos}-${todo.idName()}`;
        domResult.push(`${`
<li id='${id}' class='list-group-item border-0 d-flex align-items-center ps-0'>
  <input class='form-check-input me-3' type='checkbox' value='' aria-label='...' checked />
  <span for='${id}'>${todo}</span>
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

      <p class='mb-2'><span class='h2 me-2'>${todoObj.header}</span> <span
      class='badge bg-danger'>checklist</span></p>
      <p class='text-muted pb-2'>${todoObj.date}</p>

      <ul class='list-group rounded-0'>
        ${lLiDom()} 
      </ul>
    </div>
  </div>
</div>
    `}`;
    return this.innerHTML = template
  }
}