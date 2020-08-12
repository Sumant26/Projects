const headingElem = document.getElementById(`heading1`);
headingElem.innerText = `Hello`

const headingElem2 = document.getElementById(`heading2`);
headingElem2.innerText = `from`

const headingElem3 = document.getElementById(`heading3`);
headingElem3.innerText = `js`

const headingElemclass = document.getElementsByClassName(`h`);

for (let h of headingElemclass) {
    h.classList.add(`red`);
}

for (let h of headingElemclass) {
    h.classList.remove(`red`);
}

const inputText = document.getElementById(`text`)
const inputPassword = document.getElementById(`password`)
const inputSubmitButton = document.getElementById(`submitBtn`)

const submitBtnActionListener = (event) => {
    event.preventDefault()
    const inputTextvalue = inputText.value
    const inputPasswordvalue = inputPassword.value
    console.log(inputTextvalue);
    console.log(inputPasswordvalue);
}
submitBtn.addEventListener(`click`,submitBtnActionListener)