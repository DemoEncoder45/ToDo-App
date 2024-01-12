let addButton = document.getElementById("addItem")

let toDoContainer = document.getElementById("toDoContainer")

let input = document.getElementById("inputField")

addButton.addEventListener('click', function(){
    //this variable creates the paragraph element in the DOM
    const paragraph = document.createElement('p')
    const deleteItem = document.createElement('button')

    //This line adds styling to the variable in question.
    paragraph.classList.add('paragraph-styling')
    deleteItem.classList.add('deleteItem-styling')

    //This line will set the content of the paragraph equal to what 
    //was in the input field.
    paragraph.innerText = inputField.value
    deleteItem.innerText = "x"

    //This line will appened the paragraph element that was made
    //and added as a child to the toDoContainer, in other words
    //it places whatever is in the paragraph element at the end.
    toDoContainer.appendChild(paragraph)
    toDoContainer.appendChild(deleteItem)

    //This line will set the value of the input field back to empty
    //making it look like nothing is there
    inputField.value = ""

    //This line will make so when you click once on the paragrah
    //text a line will be place through the text.
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })

    //This line will make it so when clicked twice on the paragrah
    //text the paragraph is removed due to it being a child element

    deleteItem.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph)
        toDoContainer.removeChild(deleteItem)
    })
})