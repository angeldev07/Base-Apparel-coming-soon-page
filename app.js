const sendBtn = document.querySelector(".send")
const inputEmail = document.querySelector("#email")
const iconError = document.querySelector(".error")
const errorMsj = document.querySelector(".error-msg")

const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/

sendBtn.addEventListener("click", ()=>{
    const value = inputEmail.value
    const uno = inputEmail.value === "" 
    console.log(value);
    const ok = expression.test(value)

    if(!ok || uno){
        inputEmail.classList.add('fail')
        iconError.classList.add("showError")
        errorMsj.classList.add("showError")
    }

    if(inputEmail.classList.contains("fail") || ok){
        inputEmail.value = ""
        inputEmail.classList.remove("fail")
        iconError.classList.remove("showError")
        errorMsj.classList.remove("showError")
    }

    
})
