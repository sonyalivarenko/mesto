import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(data, popup_selector) {
    super(popup_selector);
    this._name = data.name;
    this._link = data.link;
  }

  handleOpenPopup() {
    const bigImage = this._popup.querySelector('.popup-image__content');
    const bigImageName = this._popup.querySelector('.popup-image__name');
    bigImage.src = this._link;
    bigImageName.textContent = this._name;
    bigImage.alt = this._link;
    super.open();
  }
}