import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup_selector) {
    super(popup_selector);
    this._bigImage = this._popup.querySelector('.popup-image__content');
    this._bigImageName = this._popup.querySelector('.popup-image__name');
  }

  handleOpenPopup(data) {
    this._bigImage.src = data.link;
    this._bigImageName.textContent = data.name;
    this._bigImage.alt = data.link;
    super.open();
  }
}