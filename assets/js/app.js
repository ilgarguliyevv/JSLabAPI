import { postDatas, deleteById, getDatas } from "./requests.js";
import { users } from './baseURL.js'
const table = document.querySelector(".table")
const tbody = document.querySelector("tbody")
const getdata = document.querySelector(".getdata")
const inpName = document.querySelector(".impName")
const impSurname = document.querySelector(".inpSurname")
const inpAge = document.querySelector(".inpAge")
const saveBtn = document.querySelector(".saveBtn")

async function createTable() {
    let data = await getDatas(users);
    data.forEach((elem) => {
        let tr = document.createElement("tr");
        let Idtd = document.createElement("td");
        let nametd = document.createElement("td");
        let usernametd = document.createElement("td");
        let agetd = document.createElement("td");
        let deletetd = document.createElement("td");
        let deleteBtn = document.createElement("button");
        // let posttd = document.createElement("td");
        // let postBtn = document.createElement("button");
        let getData = document.querySelector(".getData");

        deleteBtn.setAttribute("data", elem.id);

        deleteBtn.className = "btn btn-danger";

        Idtd.innerText = elem.id;
        nametd.innerText = elem.name;
        usernametd.innerText = elem.surname;
        agetd.innerText = elem.age;

        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", (e) => {
            deleteById(users, e.target.getAttribute("data"));
            e.target.parentElement.parentElement.remove();
        });
        deletetd.append(deleteBtn);

        tr.append(Idtd, nametd, usernametd, agetd, deletetd,);
        table.append(tr);
    });
}
createTable();



// let tbody = document.querySelector(".tbody")
// let getBtn = document.querySelector(".getdata")
// let addBtn = document.querySelector(".addata")
// let deleteBtn = document.querySelector(".deletedata")

// function createTable(data) {
//     data.forEach((element) => {
//         tbody.innerHTML += `
//         <tr class="userrow">
//         <td>${element.id}</td>
//         <td>${element.username}</td>
//         <td>${element.lastname}</td>
//         <td>${element.age}</td>
//         </tr>
//         `;
//     });
// }

// async function getUsers() {
//     return await axios
//         .get("http://localhost:3000/users")
//         .then((res) => createTable(res.data))
//         .catch((error) => {
//             // throw new Error("Failed to fetch data:" + error);
//         });
// }
// getBtn.addEventListener("click", getUsers);

// let modal = document.querySelector(".postmodal")

// addBtn.addEventListener("click", function () {
//     modal.classList.remove("d-none");
// });

// let form = document.querySelector(".form")

// async function createUser(e) {
//     e.preventDefault();

//     let username = document.querySelector(".username").value;
//     let lastname = document.querySelector(".lastname").value;
//     let age = document.querySelector(".age").value;

//     let newUser = { username, lastname, age };

//     return await axios
//         .post("http://localhost:3000/users", newUser)
//         .then((res) => createTable(res.data))
//         .catch((error) => console.log(error));
// };