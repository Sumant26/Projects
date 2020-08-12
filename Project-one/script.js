const email = document.getElementById(`email`)
 const password = document.getElementById(`password`)
 const date = document.getElementById(`dob`)
const submitBtnValue = document.getElementById(`submitBtn`)
const viewDataBtn = document.getElementsByClassName(`item`)


const userDataArray = localStorage.getItem(`userDataArray`);
let userData = [];

if(userDataArray){
    userData = JSON.parse(userDataArray);
}

const submitBtnActionListener = (event) => {
        event.preventDefault()
        const emailValue = email.value
        const passwordValue = password.value
        const dateValue = date.value
        
        const user = {
            Email: emailValue, 
            Password: passwordValue, 
            Date: dateValue
        }
        userData.push(user);
        localStorage.setItem(`userDataArray`,JSON.stringify(userData));
    }
       
        

        
submitBtnValue.addEventListener(`click`, submitBtnActionListener);
