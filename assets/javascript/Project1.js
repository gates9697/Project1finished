var firebaseConfig = {
  apiKey: "AIzaSyDYLpe8h2FUgrC8HbkY3VuyrFhJLb2T8cE",
  authDomain: "mytestproj-5b683.firebaseapp.com",
  databaseURL: "https://mytestproj-5b683.firebaseio.com",
  projectId: "mytestproj-5b683",
  storageBucket: "mytestproj-5b683.appspot.com",
  messagingSenderId: "87679041814",
  appId: "1:87679041814:web:75dabb1bed76630e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  var database = firebase.database();
function displaySeating (team){
console.log (team)
}
    // on resolution of submit from form ID "user-signup"
    $("#user-signup").submit(function(event) {                                  
    
      // stop submission of inputs if validation fail
      var testingv = validateEntry(event);
      if(testingv === false) {
        return false;
      }

      // prevent page from refreshing when form tries to submit itself
      event.preventDefault();
      // Capture user inputs and store them into variables
      var email = $("#inputEmail4").val().trim();
      var password = $("#inputPassword4").val().trim();
      // var address = $("#inputAddress").val().trim();
      // var city = $("#inputCity").val().trim();
      // var state = $("#inputState").val().trim();
      // console.log(state);
      // var zip = $("#inputZip").val().trim();
      
      var team = $(".team option:selected").val();
      localStorage.setItem("team", team)
      var user={
        email:email, 
        password:password,
        // address:address,
        // city:city,
        // state:state,
        // zip:zip,
        team:team,

      }
      database.ref('/users').push(user);
      // Console log each of the user inputs to confirm we are receiving them
      console.log(email);
      // console.log(address);
      // console.log(city);
  
      // Replaces the content in the "recent-member" div with the new info
      $("#email-display").text(email);
      $("#password-display").text(password);
      // $("#address-display").text(address);
      // $("#city-display").text(city);
      // Clear sessionStorage
      sessionStorage.clear();
      // Store all content into sessionStorage
      sessionStorage.setItem("email", email);
      // sessionStorage.setItem("address", address);
      // sessionStorage.setItem("city", city);
    });

    // By default display the content from sessionStorage
    $("#email-display").text(sessionStorage.getItem("email"));

    // $("#address-display").text(sessionStorage.getItem("address"));
    // $("#city-display").text(sessionStorage.getItem("city"));
    


//click event on submission, on click call your function displaySeating
$("#add-user").click(displaySeating);

//displays the seating of selected team
function displaySeating (){
  var teamSeat = $(".team option:selected").val();
  // stop function if user did not select a team
  if(teamSeat !== "Team") {
    var img = "assets/images/" + teamSeat + ".jpg";
    $(".seatImg").attr("src", img);
  }
}   
function tickets(){
    // window.location="./login.html"
}

// checking each entry
function validateEntry(event) {

  // clear previous invalidation msg
  $(".invalidation").empty();

  var tallies = 0;                       // counter of fail validations
  var invalMsg = "Invalid entry";
  
  $($('form').prop('elements')).each(function(index) {
    console.info(this);  //db

    // testing email input
    if(index === 0) {
      var email = eValid($(this).val());    
      if(email == false || $(this).val().length === 0) {  // if failed req. or empty  
        invalidationText(invalMsg, $(this).get());
        tallies++;
      }
    }

    // testing password input
    if(index === 1) {
      var invalPMsg = "Need a cap letter and a number";   // custom invalidation pw req.
      var pw = evalPw($(this).val());                     //   msg for passwords
      if(pw ==  false) {    // if failed req. (req. include password not empty)
        invalidationText(invalPMsg, $(this).get());
        tallies++;
      }
    }

    // testing team input
    if(index === 2) {
      if($(this).val() === "Team") {                      // if entry empty
        invalidationText(invalMsg,  $(this).get());
        tallies++;
      } 
    }
  });

  // tallies of zero means no fail validation
  if(tallies === 0) {
    return true;
  } else {
    return false;
  } 
}

// injecting invalidation msg into DOM
function invalidationText(msg, atCurrent) {
  var invalidText = $("<div>");
  invalidText.text(msg);
  invalidText.css({"color":"red", "font-size":"15px"});
  $($(atCurrent)).next().append(invalidText);
}

// validate email string, criteria for an valid email are as follow:
// - has a at character '@'
// - one of the common Top-Level Domain (TLD) name
// - '@' must be before TLD name
function eValid(argz) {

                  // common TLD name .gov .edu .info .com .net .org
  var patternz = [ /[@]/g, /com\b/i, /edu\b/i, /gov\b/i, 
                        /info\b/i, /net\b/i, /org\b/i ];
  var ind = [];   // index0 of '@' and index1 of TLD name
                  // on email string
  
  for(var i = 0; i < 7; i++) {

    if( i === 0
        && argz.match(patternz[i]) !== null       // '@' exist          
        && argz.match(patternz[i]).length < 2) {  // only one in string

      // argz.match(patternz[i])[0] is '@'
      // ind[0] now has the placement value of '@' on email string
      ind.push(argz.indexOf(argz.match(patternz[i])[0]));
    }

    // latch on when a TLD matched
    if( i > 0 && argz.match(patternz[i]) !== null) {

      // argz.match(patternz[i])[0] is TLD without char '.'
      // backtrack to locate index of '.'
      // then push it onto ind[1] if a period actualy exist
      var temp = argz.length - argz.match(patternz[i])[0].length;

      if(argz[temp - 1] === '.') {
        ind.push(temp-1);

        // zero for the case of email that is:
        // blahblah@.com
        if((ind[1] - ind[0]) > 0) {
          return true;
        }
      }
    }
  }
  return false;
}

// validating password criteria:
// contains a cap letter and a number, and entry not blank
function evalPw(inputs) {
  var upper = /[A-Z]/g;     // caps search
  var num = /[0-9]/g;       // numericals search
  var upperR = inputs.match(upper);             // caps search results
  var numR = inputs.match(num);                 // numericals search results

  if(upperR !== null && numR !== null && inputs.length !== 0 ) {
    return true;
  } else {
    return false;
  }
}







