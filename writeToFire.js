var config = {
    apiKey: "AIzaSyB0SnQAaVp9kHxQ0l9iU17ELCw2I5D1PZk",
    authDomain: "pillar-210013.firebaseapp.com",
    databaseURL: "https://pillar-210013.firebaseio.com",
    projectId: "secure-pillar-210013",
    storageBucket: "secure-pillar-210013.appspot.com",
     messagingSenderId: "538963335746"
  };
  
firebase.initializeApp(config);

var contacts = firebase.database().ref("contacts");

var submitContact = function () {
		
	var name = $("#name").val();
	var email = $("#email").val();
	var comments = $("#comments").val();
	
	contacts.push({
		"name": name,
		"email": email,
		"comments": comments
	});
};

$(window).load(function () {
  $("#contactForm").submit(submitContact);
});
