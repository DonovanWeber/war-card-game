import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import WarService from './war-service.js';

function getElements(response) {
  if (response.main) {
    return response;
  }
  return ("ERROR: error...");
}

async function getDeckApiCall() {
  const response = await WarService.getDeck();
  getElements(response);
}

// async function getPileApiCall(id) {
//   const response = await WarService.getPile(id);
//   getElements(response);
// }

// async function dishPileApiCall(id, name, cards) {
//   const response = WarService.dishPile(id, name, cards);
//   getElements(response);

// }

$(document).ready(function() {

  $("#new-game").click(function(){
    $("#start-game").show();

    const deck = getDeckApiCall();
    console.log(deck);




  });
  /*
  $("#player1").click(function() {
    let promise1 = WarService.drawPile();
    promise1.then(function(response){
      const body = JSON.parse(response);
    }, function(error){
      $("#show-errors").text(`There was an error processing your request: ${error}`);
    });

    let promise2 = WarService.drawPile();
    promise2.then(function(response){
      const body = JSON.parse(response);
    }, function(error){
      $("#show-errors").text(`There was an error processing your request: ${error}`);
    });
  });
  */

});