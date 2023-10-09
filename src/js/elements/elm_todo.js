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

      todoObj.todo.forEach((name, i) => {
        let pos = i + 1;

        // TODO: add fn for id name
        console.log(name.idName());
        let id = `${pos}-${name.idName()}`;
        return domResult << `<li id='${id}'>${pos}. ${name}</li>`
      });

      return domResult.join("\n")
    };

    let template = `${`\n    <ul>\n      ${lLiDom()}\n    </ul>\n    `}`;
    return this.innerHTML = template
  }
}