const form = document.querySelector("form");

const inputName = document.getElementById("name");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");

let names = [];

class Name {
    constructor(name) {
        this.userName = name;
    }
}

saveBtn.onsubmit = event => {
    event.preventDefault();

const newName = new Name(inputName.value)

names.push(newName)

localStorage.setItem("userName", JSON.stringify(newName))


}


