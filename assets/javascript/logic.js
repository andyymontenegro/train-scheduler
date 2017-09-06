//alert("it works");
$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2BJc8gRryhTrZ7LpeMC02ptCSeiRdxTI",
    authDomain: "train-scheduler-5e5c8.firebaseapp.com",
    databaseURL: "https://train-scheduler-5e5c8.firebaseio.com",
    projectId: "train-scheduler-5e5c8",
    storageBucket: "train-scheduler-5e5c8.appspot.com",
    messagingSenderId: "660863966122"
  };
  firebase.initializeApp(config);

  //clock
  setInterval(function(){
      $('.current-time').html(moment().format("hh:mm:ss A"))
  }, 1000);

  $(".content").hide();
});