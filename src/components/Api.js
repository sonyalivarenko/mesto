export default class Api {
  constructor({baseUrl, headers}) { 
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
}

  // загрузка информации о пользователе с сервера
  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  // загрузка всех карточек с сервера
  getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })
        .then(res => {
          return this._getResponseData(res);
        });
  }

  // загрузка новых данных пользователя на сервер
  editProfile(profileInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: profileInfo.name,
        about: profileInfo.job
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  // публикация новой карточки на сервер
  getNewCard(cardInfo) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardInfo.name,
        link: cardInfo.link
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  //удаление карточки с сервера
 deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  // отправка лайка на сервер
   likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }
 
  // удаление лайка с сервера
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  // загрузка нового аватара на сервер
  getNewAvatar(avatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink.avatar
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }
}