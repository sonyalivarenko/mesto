export default class Section {
constructor({renderer}, selector) {
    //this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(renderedItems) {
    renderedItems.forEach(this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}