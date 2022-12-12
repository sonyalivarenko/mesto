import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup_selector) {
    super(popup_selector);
  }

  handleOpenPopup(data) {
    const bigImage = this._popup.querySelector('.popup-image__content');
    const bigImageName = this._popup.querySelector('.popup-image__name');
    bigImage.src = data.link;
    bigImageName.textContent = data.name;
    bigImage.alt = data.link;
    super.open();
  }
}