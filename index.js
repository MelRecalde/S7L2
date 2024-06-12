const form = document.querySelector("form");

const list = document.querySelector(".list")

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
    const li = document.createElement("li")
    // const hr = document.createElement("hr")
    li.innerText = inputName.value
    list.appendChild(li)
    // list.append(hr)
}

form.onsubmit = (event) => {
    event.preventDefault();

    const newName = inputName.value
    names.push(newName)
    // console.log(names)
    localStorage.setItem("userName", JSON.stringify(names))

  /*  if (saveBtn) {
        localStorage.getItem("userName")
        generateCard()
        list.innerText = inputName.value
    } else if (deleteBtn) {
        localStorage.removeItem("userName")
        list.innerText = ""
    } else {
        list.innerText = "No names in data"
    } */

    saveBtn.addEventListener("click", () => {
        localStorage.getItem("userName")
        generateCard()
    })

    deleteBtn.addEventListener("click", () => {
        localStorage.removeItem("userName")
        names.pop()
    })


}

// EX 2

let i = sessionStorage.getItem('count')
        ? parseInt(sessionStorage.getItem('count'))
        : 0

      const counter = function () {
        i = i + 1
        document.getElementById('timer').innerText =
          i + ' seconds'
        sessionStorage.setItem('count', i)
      }

      setInterval(counter, 1500)


