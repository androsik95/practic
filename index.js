


const drawUsers = (data, userTable) => {
  userTable.innerHTML = "";

  data.forEach((item, index) => {
    userTable.innerHTML += `
        <tbody 
        <tr class='user-card' id=${item.id} >
          <th>#:${index + 1}</th>
          <th>Name:${item.name}</th>
          <th>Surname:${item.surname}</th>
          <th>Age:${item.age}</th>
          </tr>
        </tbody>`;
  });
};



const submitHandler = () => {
  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const age = document.querySelector("#age");
  

  const nameError = name.value.trim();
  const surnameError = surname.value.trim();
  const ageError = age.value.trim();

  if (nameError && surnameError && ageError) {}
 
    else {
    alert('Заполните данные');
    
    return {
      id: Date.now(),
      nameError: nameError.value,
      surnameError: surnameError.value,
      ageError: ageError.value,
    };}
    

  return {
    id: Date.now(),
    name: name.value,
    surname: surname.value,
    age: age.value,
  };
  
};




const init = () => {
  let data = [];
  const submitBtn = document.querySelector("#submitBtn");
  const userTable = document.querySelector("#userTable");
  const deleteAllButton = document.querySelector("#deleteAllButton")

 
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const user = submitHandler();
    data.push(user);
    drawUsers(data, userTable);
  
  });

  deleteAllButton.addEventListener("click", () => {
    data = [];
    drawUsers(data, userTable);
  });
 

 

}

  init();

