
function getData(){
    axios.get("https://api.vschool.io/JosephWhite/todo")
        .then(response => listData(response.data))
        .catch(err => console.log(err))
}

function listData(data){

    clearList()
    
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = `Item: ${data[i].title}`
        document.getElementById('todo-list').appendChild(h1)
        const h2 = document.createElement('h2')
        h2.textContent = `Description: ${data[i].description}`
        document.getElementById('todo-list').appendChild(h2)
        const h3 = document.createElement('h3')
        h3.textContent = `Price: ${data[i].price}`
        document.getElementById('todo-list').appendChild(h3)
        const img = document.createElement(`IMG`)
        img.setAttribute("src", data[i].imgUrl)
        img.setAttribute("width", "304");
        img.setAttribute("height", "228")
        document.getElementById('todo-list').appendChild(img) 
    }
}

function clearList(){
    const eliminate = document.getElementById('todo-list')
    while(eliminate.firstChild){
        eliminate.removeChild(eliminate.firstChild)
    }
}

getData()

const todo = document.myForm

todo.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newTodo = {
        title: todo.title.value,
        description: todo.description.value,
        price: todo.price.value,
        imgUrl: todo.imgUrl.value
    }
    
    todo.title.value = ""
    
    axios.post("https://api.vschool.io/Joseph/todo", newTodo)
        .then(response => getData())
        .catch(err => console.log(err))
})