"use strict";

$(document).ready(function() {
   console.log("jQuery is loaded !");

   $("#request-button").click(() => {

   $.post("http://localhost:3000/", {data: "Hello server"}, (response) => {
     console.log("The server has responded!");
     console.log("The server sent the following", response.message);
   });

  });

});

console.log("script finished");
