const firebaseConfig = {
	apiKey: "AIzaSyDyOPseellDAbkHcsbVfHBkTG7CN8uEjAg",
	authDomain: "todo-a8978.firebaseapp.com",
	projectId: "todo-a8978",
	storageBucket: "todo-a8978.appspot.com",
	messagingSenderId: "1008303775406",
	appId: "1:1008303775406:web:51537bc26204593b11973f",
	databaseURL: "https://todo-a8978-default-rtdb.firebaseio.com"
  };


firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();