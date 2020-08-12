const text = document.getElementById(`text`)
const submitBtn = document.getElementById(`submit`)

const submitBtnActionListener = async (event) => {
    event.preventDefault()
    const textValue = text.value
     const data = {
         name: textValue
     }
   
  const name = JSON.stringify(data);

  
      const response = await fetch(`https://post-user-data.firebaseio.com/user.json`, {
          method: `post`, 
          body: name
      })
        
  }



submitBtn.addEventListener(`click`, submitBtnActionListener);