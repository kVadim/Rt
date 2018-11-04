 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQi8sZLpZDoFNv_gfC4dQdIde6koqpC9I",
    authDomain: "ti-project-932b2.firebaseapp.com",
    databaseURL: "https://ti-project-932b2.firebaseio.com",
    projectId: "ti-project-932b2",
    storageBucket: "ti-project-932b2.appspot.com",
    messagingSenderId: "227147197117"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
