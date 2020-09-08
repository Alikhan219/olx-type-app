
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

const nameee = document.querySelector('.username')
const phone = document.querySelector('.phone')
const email = document.querySelector('.not-registerEmail')
const pass = document.querySelector('.new-password')
const userId = document.querySelector('.userid')
let ads = [];

function loadHandler() {

  const parseData = localStorage.getItem("Userdata");
  const users = JSON.parse(parseData);
  console.log(users)

  nameee.innerHTML = users.Username;
  phone.innerHTML = users.PhoneNumber;
  email.innerHTML = users.Email;
  pass.innerHTML = users.Password;
  userId.innerHTML = users.id;
  ads = users.ads;

  ads.forEach(element => {
    console.log(element);
    showAdd(element);
  });

}

var firestore = firebase.firestore();
const postBtn = document.querySelector('.post-btn')
const category = document.querySelector('.category');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const locationn = document.querySelector('.location');
const price = document.querySelector('.price');




postBtn.addEventListener('click', e => {
  const cat = category.value;
  const titl = title.value;
  const des = description.value;
  const loc = locationn.value;
  const pric = price.value;
  const parseeData = localStorage.getItem("Userdata");
  const adId = uuid();
  const userData = JSON.parse(parseeData);
  const currentUserid = userData.id
  const docRef = firestore.doc(`olx/ads/${adId}/${cat}`);
  docRef.set({
    Category: cat,
    Title: titl,
    Description: des,
    Location: loc,
    price: pric,

  }).then(() => {
    return firestore.doc(`Users/${currentUserid}/ads/${adId}`).set({ adId, category: cat, Title: titl, description: des, location: loc, price: pric });
  }).then((res) => {
    alert("Ad Posted Successfully");
    console.log(res)
  })
    .catch((err) => {
      alert("Error in posting ad");
      console.log(err);
    });
  console.log(docRef)
});





function showAdd({Title, adId, category, description, location, price}) {
  const adContainer = document.createElement('div');
  adContainer.classList.add('add-1')
  const h3_1 = document.createElement('h3');
  h3_1.innerText = "Category";
  const h4_1 = document.createElement('h4')
  h4_1.innerText = category
  const h3_2 = document.createElement('h3')
  h3_2.innerText = "Title";
  const h4_2 = document.createElement('h4');
  h4_2.innerText = Title;
  const h3_3 = document.createElement('h3');
  h3_3.innerHTML= "Description";
  const h4_3 = document.createElement('h4');
  h4_3.innerHTML= description;
  const h3_4 = document.createElement('h3');
  h3_4.innerHTML= "Location";
  const h4_4 = document.createElement('h4');
  h4_4.innerHTML= location;
const h3_5 = document.createElement('h3');
h3_5.innerHTML = "Price";
const h4_5 = document.createElement('h4');
h4_5.innerHTML = price;
const viewDetailDiv = document.createElement('div');
viewDetailDiv.appendChild(h3_3)
viewDetailDiv.appendChild(h4_3)
viewDetailDiv.appendChild(h3_4)
viewDetailDiv.appendChild(h4_4)
viewDetailDiv.appendChild(h3_5)
viewDetailDiv.appendChild(h4_5)
  adContainer.append(h3_1);
  adContainer.appendChild(h4_1);
  adContainer.appendChild(h3_2);
  adContainer.appendChild(h4_2);      
  adContainer.appendChild(viewDetailDiv);
  console.log(adContainer);
  const mainDiv= document.querySelector('.mainDiv');
  mainDiv.appendChild(adContainer);
}






