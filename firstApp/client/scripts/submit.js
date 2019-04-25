"use strict";

$(document).ready(() => {

  $("#save-server").click(() => {

    let userNumber = $("number").val();
    let dataToSendToServer = {userNumber: value};

    $.post("http://localhost:3000/numberSaver", 
    dataToSendToServer, (data) => {
      console.log("The number was sent to the 
      server.");  
    });

  });

});
