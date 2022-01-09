
  console.log('Start file login with firebase');
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
  firebase.initializeApp(config);
  var database = firebase.database();
  //Firebase storage 
  const db = firebase.firestore()
  // db.collection('play').get().then(result => console.log(result.docs[0].data()))
  // db.collection('play').doc('name').set({
  //   name:'nam'
  // })
  console.log(database.ref('play').value);
  console.log(firebase.auth());
  database.ref("play/" + 'haha').set({
    username:'nam',
    userId:123214,
    message:'ra đây nhanh',
    at:firebase.firestore.FieldValue.serverTimestamp()
  });

  //Google singin provider
//   var ggProvider = new firebase.auth.GoogleAuthProvider();
//   //Facebook singin provider
//   var fbProvider = new firebase.auth.FacebookAuthProvider();
//   //Login in variables
//   const btnGoogle = document.getElementById('btnGoogle');
//   const btnFaceBook = document.getElementById('btnFacebook');

//       //Sing in with Google
//       btnGoogle.addEventListener('click', e => {
//           firebase.auth().signInWithPopup(ggProvider).then(function(result) {
//               var token = result.credential.accessToken;
//               var user = result.user;
//               console.log('User>>Goole>>>>', user);
//               userId = user.uid;

//           }).catch(function(error) {
//               console.error('Error: hande error here>>>', error.code)
//           })
//       }, false)

//       //Sing in with Facebook
//       btnFaceBook.addEventListener('click', e => {
//           firebase.auth().signInWithPopup(fbProvider).then(function(result) {
//               // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//               var token = result.credential.accessToken;
//               // The signed-in user info.
//               var user = result.user;
//               console.log('User>>Facebook>', user);
//               // ...
//               userId = user.uid;
          
//           }).catch(function(error) {
//               // Handle Errors here.
//               var errorCode = error.code;
//               var errorMessage = error.message;
//               // The email of the user's account used.
//               var email = error.email;
//               // The firebase.auth.AuthCredential type that was used.
//               var credential = error.credential;
//               // ...
//               console.error('Error: hande error here>Facebook>>', error.code)
//           });
//       }, false)
//       //jquery 
