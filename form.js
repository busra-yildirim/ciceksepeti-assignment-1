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

    consolo.log("company", company.value);
    consolo.log("fName", fName.value);
    consolo.log("lName", lName.value);
    consolo.log("mail", mail.value);
    consolo.log("phone", phone.value);

})