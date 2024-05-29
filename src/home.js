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


const db = firebase.firestore();

const aname = document.getElementById('aname');
const cat = document.getElementById('cat');
const info = document.getElementById('info');
const ipfs = document.getElementById('ipfs');
const addBtn = document.getElementById('addBtn');

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

let row=document.createElement('div');
row.className="row";
row.id="row"
document.body.append(row);

let heading=document.createElement('h3');
heading.className="heading";
heading.innerText="TOP NEWS";
    
    row.appendChild(heading);


let postCollection = document.querySelector("#posts-collection");
function createPost(title, category, information ,ipfs) {


    let bodyElement = document.body;
    //The document.createElement() method create html elements specified by tagName
    let column = document.createElement('div');
    let cardElement = document.createElement('div');
    
    let imageContainer = document.createElement('div');
    let infoContainer = document.createElement('div');

    let imageElement = document.createElement('img');
    let headingElement = document.createElement('h5');
    let catElement=document.createElement('h6');
    let paragraphElement = document.createElement('p');
    let btnElement = document.createElement('a');



    //The ClassName property gets and sets the value of the class attribute of the spefified element
    column.className="column";
    cardElement.className = "card";
    imageContainer.className = "image-container";
    infoContainer.className = "info-container";
    imageElement.className = "image";
    headingElement.className = "heading";
    catElement.className="category";
    paragraphElement.className = "paragraph";
    btnElement.className = "btn";
    

    //Works the same way as the className property except it sets the source of the imageElement
    if(category=="s"){
    imageElement.src = "world.png";
    }

    // This sets the value of an attribute specified element. If exists then will be updated, otherwise the new attribute is added with the specified name and value
    btnElement.setAttribute("href", ipfs);
    imageElement.setAttribute("alt", "Image from Unsplash");

    headingElement.innerText = title;
    catElement.innerHTML=category;
    paragraphElement.innerText = information;
    btnElement.innerText = "Learn more";
    
    row.appendChild(column);
    column.append(cardElement);
    cardElement.append(imageContainer, infoContainer);

    imageContainer.appendChild(imageElement);
    infoContainer.append(headingElement, paragraphElement, catElement, btnElement);

  }

  

function getPosts() {
    db.collection("posts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(docs => {
          createPost(
            docs.data().aname_f,
            docs.data().cat_f,
            docs.data().info_f,
            docs.data().ipfs_f
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  getPosts();
