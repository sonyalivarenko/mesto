export default class Card {
  constructor (data, userId, selector, handleCardClick, handleCardDelete, handleCardLike, handleCardLikeDelete) {
    this._data = data;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    this._handleCardLikeDelete = handleCardLikeDelete;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
  }

  _getElement() {
    const photoTemplate = document.querySelector(this._selector).content;
    const photoElement = photoTemplate.querySelector('.photo__item').cloneNode(true);
  
    return photoElement;
  }

  _makeInvisibleTresh() {
    if (!(this._ownerId === this._userId)) {
      this._buttonDelete.remove();
    }
  }

  _findId() {
    return this._likes.find((res) => res._id === this._userId);
  }

  likeImage(data) {
    this._likes = data.likes;
    const like = this._element.querySelector('.photo__heart');
    const countLike = this._element.querySelector('.photo__number-like');
    if (this._findId()) { 
      like.classList.add('photo__heart_active');
    }
    else {
      like.classList.remove('photo__heart_active');
    }
    countLike.textContent = this._likes.length;
  }

  removeImage() {
    this._element.remove();
  };

  _setEventListeners() {
    this._buttonDelete.addEventListener('click', () => {
      this._handleCardDelete(this._id, this);
    });
    this._buttonLike.addEventListener('click', () => {
      if (!this._findId()) {
        this._handleCardLike(this._id, this);
      }
      else {
        this._handleCardLikeDelete(this._id, this);
      }
    })
    this._photoImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  _fillImage() {
    this._photoTitle.textContent = this._name;
    this._photoImage.src = this._link;
    this._photoImage.alt = this._name;
    
  }

    generate() {
      this._element =  this._getElement();
      this._photoTitle = this._element.querySelector('.photo__name');
      this._photoImage = this._element.querySelector('.photo__img');
      this._buttonDelete = this._element.querySelector('.photo__button-delete');
      this._buttonLike = this._element.querySelector('.photo__heart');
      
      this._makeInvisibleTresh();
      this.likeImage(this._data);
      this._fillImage();
      this._setEventListeners();
      return this._element;
    }
}