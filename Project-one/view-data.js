const userDataArray = localStorage.getItem(`userDataArray`);
let userData = [];

if(userDataArray){
    userData = JSON.parse(userDataArray)
}

const tablebody = document.getElementById(`table-body`);

for(let user of userData){
    const tr = document.createElement(`tr`);
    
    const emailTD = document.createElement(`td`);
    emailTD.innerText = user.Email;

    const dateOfBirthTD = document.createElement(`td`);
    dateOfBirthTD.innerText = user.Date;

    tr.appendChild(emailTD);
    tr.appendChild(dateOfBirthTD);

    tablebody.appendChild(tr);

}

const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts.json`);
    const data = await response.json();
    console.log(data);
}

getPosts();
