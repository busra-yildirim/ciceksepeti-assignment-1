const submit = document.querySelector("#submit")

submit.addEventListener("click", () => {
    Array.from(document.getElementsByClassName("form-row")).forEach(element => {
        const input = element.children[1]

        console.log(input.value);
    });

})