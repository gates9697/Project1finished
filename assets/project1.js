$(document).ready(function(){ 

//var teamName = $("id/class").val();
var docKey = "MTc0MzY2MTB8MTU2MzAzNTMyMC45Ng";
var secretKey = "c59296ea915d8d0bffbfac851af3179b860e871fa2367b682ca0a10bcb19f557";
var performersQueryURL = "https://api.seatgeek.com/2/performers?client_id=" + docKey + "&client_secret=" + secretKey + "&slug=san-antonio-spurs"; //(see below)
var eventsQueryURL = "https://api.seatgeek.com/2/events?client_id=" + docKey + "&client_secret=" + secretKey + "&listing_count.gt=0&performers.slug=san-antonio-spurs"; //"&slug=" + teamName;
//The keys need to be hidden in Github - google "How to hide api keys in Github"

$.ajax({
    url: eventsQueryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.events[0].stats.average_price)

    // var price = response.events[0].stats.average_price;

    // var priceDiv = $(".price");
    $(".price").append("<h1>" + response.events[0].stats.average_price + "</h1>")
  }).catch(console.log);

  $.ajax({
    url: performersQueryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  }).catch(console.log);
  
});  
