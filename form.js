
const modal = document.createElement('div');
modal.className = 'modal';

const submit = document.querySelector("#submit")
const section = document.querySelector('.form');
const userInfo = document.createElement('div');
const company = document.querySelector("#company")
const fName = document.querySelector("#fName")
const lName = document.querySelector("#lName")
const mail = document.querySelector("#e-mail")
const phone = document.querySelector("#phone")


submit.addEventListener("click", () => {
    console.log("test")
   // section.style.visible = "hidden"
  /*  
    userInfo.innerHTML += company.value + "\n"
    userInfo.innerHTML += fName.value  + "\n"
    userInfo.innerHTML += lName.value  + "\n"
    userInfo.innerHTML += mail.value  + "\n"
    userInfo.innerHTML += phone.value  + "\n"
    
    modal.append(userInfo)
*/

    e.preventDefault();
    section.append(modal)
    modal.style.display="flex";
    for(let i=0; i<form.elements.length-1; i++){
       let p =document.createElement("p");
       p.innerHTML=`${form.elements[i].parentElement.textContent} `+form.elements[i].value;
       modal.appendChild(p);
       form.elements[i].value="";
    }
    
}
)