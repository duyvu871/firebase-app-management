//create a firebase class to manage app 
class FirebaseApp {
    constructor(config) {
        firebase.initializeApp(config)
        this.database = firebase.database()
        this.firestore = firebase.firestore()
        this.auth = firebase.auth()
    }
    googleProvider(){
        var ggProvider = new firebase.auth.GoogleAuthProvider();
        this.logIn = () => {
            firebase.auth().signInWithPopup(ggProvider).then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log('User>>Goole>>>>', user);
                userId = user.uid;
    
            }).catch(function(error) {
                console.error('Error: hande error here>>>', error.code)
            })
        }
        this.logOut = () => {
            firebase.auth().signOut()
        }
    }
    showDataWithHTML( selector , DOMType ){
        const createElement = domString => new DOMParser().parseFromString(domString, 'text/html').body.firstChild
        document.querySelector(selector).appendChild(createElement(DOMType(firebase)))
    }
    
}