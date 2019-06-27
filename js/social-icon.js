export default class extends HTMLElement {
  constructor() {
    super();
    const icon = this.getAttribute('icon');
    const name = this.getAttribute('name') || '';
    const url = this.getAttribute('url') || '#';
    this.innerHTML = `
      <a href='${url}'>
        <i class='fab fa-${icon}'></i>
        ${name}
      </a>
    `;
  }
}
