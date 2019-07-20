
// credential, referencing Google Firebase App and its component (in this
// we used database), be sure to account for revision number 
// in src (in .html)
var config = {
  apiKey: "AIzaSyDYLpe8h2FUgrC8HbkY3VuyrFhJLb2T8cE",
  authDomain: "mytestproj-5b683.firebaseapp.com",
  databaseURL: "https://mytestproj-5b683.firebaseio.com",
  projectId: "mytestproj-5b683",
  storageBucket: "",
  messagingSenderId: "87679041814",
  appId: "1:87679041814:web:75dabb1bed76630e"
};
firebase.initializeApp(config);


var database = firebase.database();

var firstNz = "";           // first name
var lastNz = "";            // last name         
var inputEmail4z = "";      // email             
var inputPassword4z = "";   // password          
var inputAddressz = "";     // address           
var inputCityz = "";        // city              
var inputStatez = "";       // state             
var inputZipz = 0;          // zip               
var Ihandlez = "";          // instagram         
var Thandlez = "";          // twitter    

// code block trigger when 'sign-up' button click
$("#su-btn").on("click", function(event) {
  event.preventDefault();

  // assign values to js variables from user input
  firstNz         = $("#first-N").val().trim();
  lastNz          = $("#last-N").val().trim();
  inputEmail4z    = $("#inputEmail4").val().trim();
  inputPassword4z = $("#inputPassword4").val().trim();
  inputAddressz   = $("#inputAddress").val().trim();
  inputCityz      = $("#inputCity").val().trim();
  inputStatez     = $("#inputState").val().trim();
  inputZipz       = $("#inputZip").val().trim();
  Ihandlez        = $("#I-handle").val().trim();
  Thandlez        = $("#T-handle").val().trim();


  // generate a keys, assign relevant data to it, then push all keys
  // with it respective value onto database
  database.ref().push({
    firstname: firstNz,
    lastname: lastNz,
    email: inputEmail4z,
    password: inputPassword4z,
    address: inputAddressz,
    city: inputCityz,
    state: inputStatez,
    zip: inputZipz,
    instagram: Ihandlez,
    twitter: Thandlez,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});







