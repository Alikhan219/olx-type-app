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





  const emailTxt= document.querySelector('.email');
  const passTxt=  document.querySelector('.password');
  const logInBtn=  document.querySelector('.login');
  


  logInBtn.addEventListener('click', e=>{
   const email= emailTxt.value;
   const pass= passTxt.value;
   const auth= firebase.auth();
   
 const promise= auth.signInWithEmailAndPassword(email, pass)
     promise.catch((e) => console.log(e.message));
     promise.then(()=>{
       console.log
       ('you are logged in');
     })
  })

firebase.auth().onAuthStateChanged((firebaseUser)=>{
  if(firebaseUser){
    console.log(firebaseUser)
  }else{
    console
    .log('you are not logged in')
  }
})
  
 