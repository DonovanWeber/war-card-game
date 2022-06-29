export default class WarService {
  constructor (id) {
    this.id = id;
  }
  static getDeck() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://deckofcardsapi.com/api/deck/new/shuffle`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  static getPile(deck) {
    console.log(deck);
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://deckofcardsapi.com/api/deck/${deck}/draw/?count=26`; 
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  static dishPile(deck_id, pilename, cards) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://deckofcardsapi.com/api/deck/${deck_id}/pile/${pilename}/add/?cards=${cards}`; 
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  static drawPile(deck, pile) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://deckofcardsapi.com/api/deck/${deck}>/pile/${pile}/draw/?count=1`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  //  http://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=
}

  //  http://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=
