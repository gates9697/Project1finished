var firebaseConfig = {
    apiKey: "AIzaSyCSPehQZO_iX-Q3hOMh2-Ypuzj_XftF-4c",
    authDomain: "anotherproj-1cba9.firebaseapp.com",
    databaseURL: "https://anotherproj-1cba9.firebaseio.com",
    projectId: "anotherproj-1cba9",
    storageBucket: "anotherproj-1cba9.appspot.com",
    messagingSenderId: "493824705163",
    appId: "1:493824705163:web:7fffaa9c1cc4123e"  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  var database = firebase.database();
function displaySeating (team){
console.log (team)
}
    // Capture Button Click
    $("#add-user").on("click", function(event) {
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
    var img = "assets/images/" + teamSeat + ".jpg";
    $(".seatImg").attr("src", img);
}   
function tickets(){
    // window.location="./login.html"
}



