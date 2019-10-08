console.log('I am Javascript running in your page!'
)

let mainHeader = document.querySelector ('h1')
let allHeaders = document.querySelectorAll ('h1')
console.log(allHeaders)
mainHeader.textContent = 'Hello!' 
mainHeader.setAttribute("style", "color:red; border: 1px solid blue;");

let newDiv = document.createElement("div"); 
newDiv.textContent = "Here I am, a new Div."

document.querySelector('main').setAttribute("style", "background-color: #dfdfdf;")


document.querySelector('main').appendChild(newDiv);