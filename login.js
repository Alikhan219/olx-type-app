var firebaseConfig = {
  apiKey: "AIzaSyATm6KUstNr1kuTnBB6f0T-QVxCT4yXvZI",
  authDomain: "general-34630.firebaseapp.com",
  databaseURL: "https://general-34630.firebaseio.com",
  projectId: "general-34630",
  storageBucket: "general-34630.appspot.com",
  messagingSenderId: "115369774170",
  appId: "1:115369774170:web:e7b6c795f8b8ee0d0c5c63",
  measurementId: "G-8YBTXMRDJF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();

var firestore = firebase.firestore();

const emailTxt = document.querySelector(".email");
const passTxt = document.querySelector(".password");
const logInBtn = document.querySelector(".login");

logInBtn.addEventListener("click", (e) => {
  const email = emailTxt.value;
  const pass = passTxt.value;
  const auth = firebase.auth();
  const emailSave = emailTxt.value;
  const passSave = passTxt.value;
  const promise = auth.signInWithEmailAndPassword(email, pass);
  emailTxt.value = "";
  passTxt.value = "";

  promise.catch(
    (e) =>
      alert(
        "The email address or password that you've entered doesn't match any account. Sign up for an account."
      ),
    console.log(e.message)
  );
  promise.then((response) => {
    const user = response.user.uid;
    var docRef = firestore.doc(`Users/${user}`);
  
    docRef.get().then(function (docRef) {
        if (docRef && docRef.exists) {
          const string = docRef.data();
          string.id = user;
          const stringify = JSON.stringify(string);
          console.log(stringify);
          
          localStorage.setItem("Userdata", stringify);
          window.location.href = "./User-profile/profile.html";
          alert("you are logged in");
        }
      
      })
      .catch(function (error) {
        console.log("got an error", error);
      });
      
      
  });
});

firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log("you are not logged in");
  }
});

function loadHandler() {
  const herfArr = window.location.href.split("?%20amir=ali");
  const loginItem = localStorage.getItem("login");
  if (herfArr.length > 1) {
    localStorage.setItem("login", 1);
    document.getElementById("log").click();
  }
  if (loginItem) {
    window.location.href = herfArr[0];
    localStorage.removeItem("login");
  }
}













