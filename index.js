const  loginBtn  = document.querySelector(".login-text")
const registerBtn = document.querySelector(".register-text")
const registerfile =document.querySelector(".register-form")
const loginfile = document.querySelector(".login-form")

registerBtn.addEventListener("click",() => {
registerfile.classList.remove("hidden")
loginfile.classList.add("hidden")
})

loginBtn.addEventListener("click",() => {
    registerfile.classList.add("hidden")
    loginfile.classList.remove("hidden")
})