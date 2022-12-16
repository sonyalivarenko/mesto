import Popup from "./Popup.js";

export default class PopupWithDeleteImage extends Popup {
  constructor(popupSelector, {handleSubmit}) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._cardId, this._card);
    });
  }

  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this._card = card;
  }
}