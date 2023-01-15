const submit = document.querySelector("#login-submit");
const loginmail = document.querySelector("#login-mail");
const loginpassword = document.querySelector("#login-password").value;
const emailRegex =  /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/
const passwordRegex =/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const namee = /^[a-zA-Z0-9]/;
const emailerror=document.querySelector(".emailerror")
const parolerror=document.querySelector(".parolerror")

submit.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailRegex.test(submit.mail.value)) {
    console.log("duz");
    emailerror.classList.add("hidden")
  } else {
    emailerror.classList.remove("hidden")
    console.log("sehv");

  }
  if (passwordRegex.test(submit.password.value)) {
    parolerror.classList.add("hidden")
  } else {
    console.log("sehv");
    parolerror.classList.remove("hidden")

  }
});

document.querySelector("#login-mail").value = "";



// const registersubmit = document.querySelector("#register-form");
// const registermail = document.querySelector("#register-mail");
// const registerpassword = document.querySelector("#register-password").value;
// // const emailRegex =  /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/
// // const passwordRegex =/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
// // const namee = /^[a-zA-Z0-9]/;
// // const emailerror=document.querySelector(".emailerror")
// // const parolerror=document.querySelector(".parolerror")


// registersubmit.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log(" ...is working")
// })