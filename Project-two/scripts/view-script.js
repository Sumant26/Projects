const tablebody = document.getElementById(`table-body`)

const getUsers = async () => {
    const response = await fetch(`https://post-user-data.firebaseio.com/user.json`)
    const data = await response.json();
   for(let key in data){
       const name = data[key].name
       const tr = document.createElement(`tr`)

       const nameTD = document.createElement(`td`)
       nameTD.innerText = name;
   
       tr.appendChild(nameTD);
       tablebody.appendChild(tr);
   }
   

}
getUsers();


