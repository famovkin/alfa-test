class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Что-то пошло не так. Обратитесь к разработчику");
  }

  getCharacters() {
    return fetch(this._baseUrl).then(res => this._checkResponse(res));
  }
}

export const api = new Api("https://rickandmortyapi.com/api/character/");
