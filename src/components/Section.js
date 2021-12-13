export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderer = renderer;
    this._data = data;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._data.forEach(element => {
      this._renderer(element);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
