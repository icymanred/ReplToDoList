const ul = document.getElementById("ar") // This is the ul element that we will add the inputed array values too
const array = [] // Array that contains the values of all the li elements added by the user 
const input = document.getElementById("input")
const button = document.getElementById("inputButton")
function addlitoul(u,val) { // Function to add a li to a ul.
  let li = document.createElement("li") // Creates the list element to go into the ul
  let value = String(val) // Turns the value into a string (to stop xss i guess)
  let text = li.appendChild(document.createTextNode(value)) // Adds the a text value with the string version of the val paramater
  ul.appendChild(li) // Adds the li to the ul
}
function renderArray(array,u) { // Creates a function to turn an array into an unordered list 
  for (let i = 0; i < array.length; i++) { // This loops through all the array
    addlitoul(ul,array[i]) // Uses the addultoul function to add the current array value to a ul
  }
}


function onButtonClick() {
  let value = input.value
  addlitoul(ul,value)
  array.push(value)

}

