import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import WarService from './war-service.js';

$(document).ready(function() {

  $("#new-game").click(function(){
    $("#start-game").show();
    let promise1 = WarService.getDeck();
    promise1.then(function(response){
      console.log("response: ", response);
      const body = JSON.parse(response);
      $("#output-deck").text(body);

      let promise20 = WarService.getPile(body.deck_id);
      promise20.then(function(response){
        const body = JSON.parse(response);
        console.log("promise2 body: ", body);
        $("#output-deck").text(body);

        let cards = [];
        for(let i=0; i<26; i++){
          cards.push(body.cards[i].code);
        }
        const cardArray = cards.join();
        console.log(cardArray);

        let promise21 = WarService.dishPile(body.deck_id, "player1", cardArray);
        promise21.then(function(response){
          const body = JSON.parse(response);
          console.log("promise21 cards: ", body);
          $("#output-deck").text(body);
        }, function(error){
          $("#show-errors").text(`There was an error processing your request ${error}`);
        });

      }, function(error){
        $("#show-errors").text(`There was an error processing your request ${error}`);
      });
  
      let promise30 = WarService.getPile(body.deck_id);
      promise30.then(function(response){
        const body = JSON.parse(response);
        console.log("promise3 body: ", body);
        $("#output-deck").text(body);

        let cards = [];
        for(let i=0; i<26; i++){
          cards.push(body.cards[i].code);
        }
        const cardArray = cards.join();

        let promise31 = WarService.dishPile(body.deck_id, "player2", cardArray);
        promise31.then(function(response){
          const body = JSON.parse(response);
          console.log("promise31 cards: ", body);
          $("#output-deck").text(body);
        }, function(error){
          $("#show-errors").text(`There was an error processing your request ${error}`);
        });

      }, function(error){
        $("#show-errors").text(`There was an error processing your request ${error}`);
      });

    }, function(error){
      $("#show-errors").text(`There was an error processing your request ${error}`);
    });
  });

  $("#player1").click(function() {
    let promise1 = WarService.drawPile();
    promise1.then(function(response){
      const body = JSON.parse(response);
      $("output-card-1").text(body);
    }, function(error){
      $("#show-errors").text(`There was an error processing your request: ${error}`);
    });

    let promise2 = WarService.drawPile();
    promise2.then(function(response){
      const body = JSON.parse(response);
      $("output-card-2").text(body);
    }, function(error){
      $("#show-errors").text(`There was an error processing your request: ${error}`);
    });
  });

});

// Therizinosaurus dinosaur :)