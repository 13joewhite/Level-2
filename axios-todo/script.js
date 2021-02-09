function getData(id){
    console.log(id)
axios.get("https://api.vschool.io/JosephWhite/todo")
    .then(response => theList(response.data))
    .catch(error => console.log(error))
}

function finishedTodo(id, value){
    //put the checkbox as true or false. const updatedTodo = { _id: id,completed: value
    const updatedTodo = {
        completed: !value
    }


    axios.put(`https://api.vschool.io/JosephWhite/todo/${id}`, updatedTodo)
        .then(response => response)
        .catch(error => error)
        console.log(id, value)
    
    getData(1)
}

function deleteItem(id){
    axios.delete(`https://api.vschool.io/JosephWhite/todo/${id}`)
        .then(response => response)
        .catch(error => error)

    getData(3)
}


function theList(data){
    clearList()

    for(let i = 0; i < data.length; i++){
        const container = document.createElement(`div`)
        const h1 = document.createElement('h1')
            if (data[i].completed){
            h1.className = "strike-through"
            }
            h1.textContent = `Item: ${data[i].title}`
            container.appendChild(h1)
        const checkBox = document.createElement(`input`)
            checkBox.type = `checkbox`
            checkBox.checked = data[i].completed
            console.log(data[i].completed)
            checkBox.onclick = () => finishedTodo(data[i]._id, data[i].completed)
            container.appendChild(checkBox)
        const deleteBtn = document.createElement(`button`)
            deleteBtn.textContent = `x`
            deleteBtn.onclick  = () => deleteItem(data[i]._id)
            container.appendChild(deleteBtn)
        const h2 = document.createElement('h2')
            h2.textContent = `Description: ${data[i].description}`
            container.appendChild(h2)
        const h3 = document.createElement('h3')
            h3.textContent = `Price: ${data[i].price}`
            container.appendChild(h3)  
        const img = document.createElement(`IMG`)
            img.setAttribute("src", data[i].imgUrl)
            img.setAttribute("width", "304");
            img.setAttribute("height", "228")
            container.appendChild(img)  
        document.getElementById(`createTodo`).appendChild(container)
    }
}

function clearList(){
    const eliminate = document.getElementById('createTodo')
    while(eliminate.firstChild){
        eliminate.removeChild(eliminate.firstChild)
    }
}

getData(2)


const createTodo = document.myForm

createTodo.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: createTodo.title.value,
        description: createTodo.description.value,
        price: createTodo.price.value,
        imgUrl: createTodo.imgUrl.value
    }

    console.log(createTodo)
    console.log(newTodo)

    createTodo.title.value = ''
    createTodo.description.value = ''
    createTodo.price.value = ''
    createTodo.imgUrl.value = ''

    axios.post("https://api.vschool.io/JosephWhite/todo", newTodo)
        .then(response => getData(4))
        .catch(error => error)
})