const aname = document.getElementById('aname');
const cat = document.getElementById('cat');
const info = document.getElementById('info');
const ipfs = document.getElementById('ipfs');
const addBtn = document.getElementById('addBtn');


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB0e91-xnuUQKG0-6yzSw9eQQYl7tKfWOg",
    authDomain: "spygeon-fda23.firebaseapp.com",
    databaseURL: "https://spygeon-fda23.firebaseio.com",
    projectId: "spygeon-fda23",
    storageBucket: "spygeon-fda23.appspot.com",
    messagingSenderId: "330301951588",
    appId: "1:330301951588:web:a238b2942a4e6505095971"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
const database = firebase.firestore();

const postscollection = database.collection('posts');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  const ID = postscollection.doc();
  ID.set({
    aname_f: aname.value,
    cat_f: cat.value,
    info_f: info.value,
    ipfs_f:ipfs.value
  })
    .then(response => alert("Thanks for telling this info! We will verify and update it in our map soon!"))
    .catch(error => console.error('Error!', error.message))
});