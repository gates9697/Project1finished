
$(document).ready(function() { 

    $('#submit-btn').on('click', function() {
        console.log('test');
        
    var firebase = require('firebase');
    var firebaseui = require('firebaseui');    
//var form = $(".form-signin");
//form.validate()
//$('#submit-btn').on('click', function() {
    //console.log('test');
    //if ($('.form-signin').valid()) {
        //$(this).button('loading');
    //}
    //return true;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });    

    });
});

//link to Firebase... check with team for credentials
//CORS - cross origin reference sharing - enable to call to more than one API at once (Chrome add-on)