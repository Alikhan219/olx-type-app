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

const firestore = firebase.firestore();
const username = document.querySelector(".username");
const phoneNumber = document.querySelector(".phone");
const emailTxt = document.querySelector(".not-registerEmail");
const passTxt = document.querySelector(".new-password");
const createBtn = document.querySelector(".btn-3");
const loginBtn = document.querySelector(".btn-4");

createBtn.addEventListener("click", (e) => {
  const email = emailTxt.value;
  const pass = passTxt.value;
  const userName = username.value;
  const phone = phoneNumber.value;

  const auth = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email, pass);

  emailTxt.value = "";
  passTxt.value = "";
  username.value="";
  phoneNumber.value="";
  promise.catch((e) => alert(e));
  promise.then((response) => {
    const user = response.user.uid;
    console.log(user);
    const docRef = firestore.doc(`Users/${user}`);
   const myyy= docRef.set({
      Username: userName,
      PhoneNumber: phone,
      Email: email,
      Password: pass,
    });
    alert(
      "your account has been created click on the login button and login again"
    );

  });
});
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log("you are not logged in");
  }
});

document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault();
});
