/*const boton1 = document.getElementById("boton1")

boton1.addEventListener("click", () => {
    console.log("Di click en boton")
})

boton1.addEventListener("click", () => {
    console.log("Di click en boton en addEvent")
})

boton1.onclick = () => {
    console.log("Di click en boton de onclick")
}

boton1.onclick = () => {
    console.log("Di click en boton de onclick otra vez")
}

const inputColor = document.getElementById('inputColor')

inputColor.addEventListener('input', () => {
    document.body.style.backgroundColor = inputColor.value
    console.log(inputColor.value)
})


const input1 = document.getElementById('input1')
const botonBusqueda = document.getElementById('botonBusqueda')

input1.addEventListener('input', () => {
    console.log(input1.value)
})

input1.addEventListener('change', () => {
    console.log(input1.value)
})

botonBusqueda.addEventListener('click', () => {
    console.log(input1.value)
})*/

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}

const  users = []

const form = document.getElementById('idForm')
const divUsers = document.getElementById('divUsers')
const botonUsers = document.getElementById('botonUsers')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let username = document.getElementById('idUser').value 
    let email = document.getElementById('idEmail').value  
    let password = document.getElementById('idPassword').value 

    const user = new User(username, email, password)
    users.push(user)
    console.log(users)

    form.reset()
})

botonUsers.addEventListener('click', () => {
    users.forEach(user => {
        divUsers.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${user.username}</h5>
                <p class="card-text">${user.email}</p>
            </div>
        </div>
        
        `
    })
})

