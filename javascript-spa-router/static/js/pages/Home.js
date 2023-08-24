import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
        <div id="welcome-section">
            <h1>Welcome to Javascript Single Page Application</h1>
            <p>To start your journey, please edit Home and add as many as u want Pages, Happy Coding!</p>
        </div>
        `;
  }
  onMount() {}
}