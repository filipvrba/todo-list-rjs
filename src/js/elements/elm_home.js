import { ENV } from "../env";

export default class ElmHome extends HTMLElement {
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
    let template = `${`
    <div class='container py-5 h-100'>
      <div class='row d-flex justify-content-center align-items-center h-100'>
        <elm-todo url-db='${ENV.VITE_URL_DB}'></elm-todo>
      </div>
    </div>
    `}`;
    return this.innerHTML = template
  }
}