

const name= document.querySelector('.username')
const phone= document.querySelector('.phone')
const email= document.querySelector('.not-registerEmail')
const pass= document.querySelector('.new-password')
const userId= document.querySelector('.userid')

function loadHandler(){
  
  const parseData=localStorage.getItem("Userdata");
  const users= JSON.parse(parseData);
  console.log(users);
  
  name.innerHTML= users.Username;
  phone.innerHTML= users.PhoneNumber;
  email.innerHTML= users.Email;
  pass.innerHTML= users.Password;
  userId.innerHTML= users.id;
 


}