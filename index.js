const form = document.querySelector("form");

const card = document.querySelector(".card")

const inputName = document.getElementById("name");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");

let names = [];

/*
class Name {
    constructor(name) {
        this.userName = name;
    }
}
*/

const generateCard = () => {
    const p = document.createElement("p")
    const hr = document.createElement("hr")
    p.innerText = inputName.value

    card.appendChild(p)
    card.append(hr)
}



form.onsubmit = (event) => {
    event.preventDefault();

const newName = inputName.value
console.log(newName)

names.push(newName)
// console.log(names)
localStorage.setItem("userName", JSON.stringify(names))

generateCard()

}




