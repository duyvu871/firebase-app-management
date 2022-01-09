// import API_Firebase from "./localApi.js";
// import { firebase } from 'https://www.gstatic.com/firebasejs/8.10.0/firebase.js';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCdO-te6s4OiHLb6CKHyM9zFQzJcLG3ops",
    authDomain: "chat-app-e5ec2.firebaseapp.com",
    projectId: "chat-app-e5ec2",
    storageBucket: "chat-app-e5ec2.appspot.com",
    messagingSenderId: "255127679898",
    appId: "1:255127679898:web:fa5a15a93f6ca06e5a0023",
    measurementId: "G-RGPXMEGLFN"
};
firebase.initializeApp(config)
//Real time database

var database = firebase.database();

//Firestore

var firestore = firebase.firestore();

//User auth

const auth = firebase.auth();

//Some api for firebase by me 

const apiFirebase = new API_Firebase(firebase);

const sendMessage = () => {
    //Get message from input
    var messages = document.querySelector('.chat input').value
    //Get current user
    var user = apiFirebase.getLogin()
    //Get time when message has posted
    var currentTimeStamp = apiFirebase.currentTime()
    //Check when user don't write anything
    if (messages !== '') {
        database.ref('message').push().set({messages,...user,...currentTimeStamp})
        document.querySelector('.chat input').value = ''
    } else {
        console.log('please write something ');
        return
    }
}

const signIn = () => {
    apiFirebase.signIn()
}

const signOut = () => {
    apiFirebase.signOut()
    location.reload()
}
const createElement = domString => new DOMParser().parseFromString(domString, 'text/html').body.firstChild
const setChat = (data) => {
    let html = `
    <div class="message">
   
         <div class="message-auth">
             <div class="auth-avatar avatar">
                 <img src="${data.photoURL}" alt="">
             </div>
         </div>
        
         <div class="message-content">
             <div class="auth-name">
                 ${data.displayName}:
             </div>
             <div class="text">${data.messages}</div>
         </div>
    
     <div class="message-time">
         ${data.timeFormat}
     </div>
 </div>`
    document.querySelector('.middle').appendChild(createElement(html))
}

const signInButton = document.querySelector('.signin');
signInButton.addEventListener('click',signIn)


auth.onAuthStateChanged((user) => {
    if (user) {
       signInButton.innerHTML = 'Sign Out',
       signInButton.removeEventListener('click',signIn)
       signInButton.addEventListener('click',signOut)
       document.querySelector('.chat button').addEventListener('click',sendMessage)
       document.querySelector('.avatar img').src = user.photoURL
       document.querySelector('.name').textContent = user.displayName
       document.querySelector('.bottom-bar').style.display = 'unset'
       document.querySelector('.chat').onkeyup = (e)=>{
           if(e.which === 13) sendMessage()
       }
    } else {
        document.querySelector('.bottom-bar').style.display = 'none'
    }
})
//Check when database has been added and get it to client 
database.ref('message').on('child_added', (snapshot) =>{
    //Set user chat 
    setChat(snapshot.val())
})






