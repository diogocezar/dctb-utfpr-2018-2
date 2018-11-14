var keyTodos = 'listTodo@minicursoJS'

var todos    = restoreFromStorage()

var $listElement   = document.querySelector('#app ul')
var $inputElement  = document.querySelector('#app input')
var $buttonElement = document.querySelector('#app button')

function printList() {
    $listElement.innerHTML = ''
    var empty = true
    for (todo of todos) {
        empty = false
        var index = todos.indexOf(todo)
        var item = `<li>${todo} <button onclick='deleteTodo(${index})'>Excluir</button></li>`;
        $listElement.insertAdjacentHTML('beforeend', item)
    }
    if(empty)
        $listElement.innerHTML = '<p>Não existem elementos na lista.</p>'
}

function addTodo() {
    var todoText = $inputElement.value
    if(todoText.length){
        todos.push(todoText)
        $inputElement.value = ''
        printList()
        saveToStorage()
    }
}

function deleteTodo(pos) {
    todos.splice(pos, 1)
    printList()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem(keyTodos, JSON.stringify(todos));
}

function restoreFromStorage(){
    return JSON.parse(localStorage.getItem(keyTodos)) || [];
}

$buttonElement.addEventListener('click', function () {
    addTodo()
})

$inputElement.addEventListener('keypress', function(e){
    if(e.keyCode == 13)
        addTodo()
})

printList()