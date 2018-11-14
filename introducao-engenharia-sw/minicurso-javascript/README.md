# Minicurso Javascript

## Módulo 1 - Conceitos e Exemplos

### Introdução

* O que é?
* Onde é utilizado?
* Para que serve?
* Utilização no Front-End;
* Utilização no Back-End;
* Frameworks Front-End;

### Configuração do Ambiente

* https://code.visualstudio.com/
* Criação de um arquivo index.html

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8"/>
        <title>Curso JavaScript</title>
    </head>
    <body>
        <script>
            // javascript
            console.log('Hello World')
        </script>
    </body>
</html>
```

* Console do navegador para debug (Logs)

### Variáveis no JavaScript

* Armazenam algum tipo de valor;
* Não tem uma tipagem de variáveis;
* Sintaxe: 

```js
var nome = "Diogo";
console.log(nome)
nome = 2
```

### Tipos de Variáveis

```js
var name = "Diogo"
var age = 32
var weight = 80.5
var human = true
var students = ['Diogo', 'Pedro', 'Gabriel']
var vet = ['Diogo', 10, [20,40, ["pow"]]]
var student = {
    name: 'José',
    age: 32,
    human: true,
    hey : function(){
        alert('hey')
    }
}
var json = [
    {content : 'teste1', id: 1},
    {content : 'teste2', id: 2},
    {content : 'teste3', id: 3},
    {content : 'teste4', id: 4},
]
console.log(json[3].content, json[3].id)
console.log(students)
console.log(student.name)
student.hey()
```

### Operações matemáticas

Diferenças entre:

```js
var x = 10
var y = 5
var result = x + y
```

```js
var x = "10"
var y = 5
var result = parseInt(x) + y
```

### Funções

```js
function sum(n1, n2){
    return n1 + n2
}
console.log(sum(5,4))
console.log(sum("Diogo ","Cezar"))
```

### Condicionais

```js
function returnAdult(age){
    if(age > 22)
        return true
    else
        return false
}
function returnGenre(genre){
    switch(genre){
        case 'M' : return 'Male'
        case 'F' : return 'Female'
        default  : return 'Other'
    }
}
console.log(returnAdult(22))
console.log(returnGenre('M'))
console.log(1 = 1)
console.log("1" == 1)
console.log("1" === 1)
```

### Operadores Lógicos

#### AND, OR, NOT

```js
    var genre = 'M', age = 23
    if(genre === 'M' && age >= 18){
        console.log('OK')
    }
    if(genre === 'M' || age >= 18){
        console.log('OK')
    }
    if(genre !== 'M'){
        console.log('OK')
    }
```

### Condição Ternária

```js
    var genre = 'M'
    if(genre === 'M'){
        console.log('OK')
    }
    else{
        console.log('NOT OK!')
    }
    // Ou...
    console.log((genre === 'M') ? 'OK' : 'NOT OK!')
```

### Estruturas de Repetição

#### for

Utilizado quando sabemos o número de passos.

```js
    for(var i=0; i<=10; i++){
        console.log('Passou em ' + i)
    }
```

#### while

Utilizado quando não sabemos quantos passos serão executados.

```js
    var j = 0
    while(j <= 100){
        console.log('Passou em ' + j)
        j++
    }
```

```js
    var j = 2398420349
    while(j > 50){
        console.log('Passou em ' + j)
        j /= 5
    }
```

### Intervalos e Timeout

#### Intervalos

É uma função que será executadas muitas vezes dentro de um intervalo.

```js
    function show(){
        console.log('Hello World')
    }
    setInterval(show, 1000)
    setInterval(function (){
        console.log('Hello World')
    }, 1000)
```

A cada 1 segundo a função será chamada.

#### Timeout

Executará a função depois de x milesegundos.

```js
    function show(){
        console.log('Hello World')
    }
    setTimeout(show, 5000)
```

Executará a função depois de 5 segundos.

### Eventos inline

* O que é DOM?
* O que são eventos?

Aprenderemos como executar alguma coisa em determinado evento.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Curso JavaScript</title>
</head>
<body>
    <div id="app">
        <button onclick="showAlert()">Clique</button>
        <button onmouseover="showAlert()">Passe o mouse</button>
        <input onkeypress="showAlert()" />
    </div>
    <script>
        function showAlert(){
            alert('Botão foi clicado!')
        }
    </script>
</body>
</html>
```

### Trabalhando com o DOM

Como trabalhar com o DOM diretamente dentro do JavaScript?

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Curso JavaScript</title>
</head>
<body>
    <div id="app">
        <input id="name" placeholder="nome"/>
        <input id="age" placeholder="idade"/>
        <button class="btn">Vai</button>
    </div>
    <script>
        var $name = document.querySelector('#name')
        var $age = document.querySelector('#age')
        var $all = document.querySelectorAll('input')
        var $button = document.querySelector('button.btn')
        console.log($all)
        $button.addEventLisner('click', function(){
            alert(`Nome: ${$name.value}, Idade: ${$age.value}`)
        })
    </script>
</body>
</html>
```

### Lidando com elementos

Podemos criar novos elementos com o JS

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Curso JavaScript</title>
</head>
<body>
    <div id="app">
        <input type="text"id="name" placeholder="nome"/>
        <input type="text" id="age" placeholder="idade"/>
        <button class="btn">Vai</button>
        <!-- vai inserir aqui! -->
        <a href="http://www.google.com">Acessar o google</a>
    </div>
    <script>
        var $app = document.querySelector("#app")
        var linkElement = document.createElement('a')
        var textElement = document.createTextNode('Acessar o google')
        linkElement.setAttribute('href', 'http://www.google.com')
        linkElement.appendChild(textElement)
        $app.appendChild(linkElement)
    </script>
</body>
</html>
```

### Alterando Estilos

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Curso JavaScript</title>
</head>
<body>
    <div id="app">
        <div class="box"></div>
    </div>
    <script>
        var boxElement = document.querySelector('.box')
        boxElement.style.width = 100
        boxElement.style.height = 100
        boxElement.style.backgroundColor = 'red'
    </script>
</body>
</html>
```
---

## Módulo 2 - Aplicação TODOs

* Vamos criar uma simples aplicação em JavaScript para gerenciar uma lista de tarefas.

### Estrutura inicial

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>TODOs</title>
</head>
<body>
    <div id="app">
        <ul>
            <li>Fazer Café <a href="#">Excluir</a></li>
            <li>Estudar Javascript <a href="#">Excluir</a></li>
            <li>Estudar para prova de matemática <a href="#">Excluir</a></li>
        </ul>
        <input type="text" placeholder="Digite um todo"/>
        <button>Adicionar</button>
    </div>
    <script src="todos.js"></script>
</body>
</html>
```

### Javascript - Parte 1

```js
    var $listElement = document.querySelector('#app ul')
    var $inputElement = document.querySelector('#app input')
    var $buttonElement = document.querySelector('#app button')
    var todos = [
        'Fazer Café',
        'Estudar Javascript',
        'Estudar para prova de matemática'
    ]

    function printList(){
        for(todo of todos){
            var todoElement = document.createAttribute('li')
            var todoText = document.createTextNode(todo)
            todoElement.appendChild(todoText)
            listElement.appendChild(todoElement)
        }
    }

    printList()
```

### Javascript - Parte 2

```js
    var $listElement = document.querySelector('#app ul')
    var $inputElement = document.querySelector('#app input')
    var $buttonElement = document.querySelector('#app button')
    var todos = [
        'Fazer Café',
        'Estudar Javascript',
        'Estudar para prova de matemática'
    ]

    function printList(){
        $listElement.innerHTML = ''
        for(todo of todos){
            var todoElement = document.createAttribute('li')
            var todoText = document.createTextNode(todo)
            todoElement.appendChild(todoText)
            listElement.appendChild(todoElement)
        }
    }

    function addTodo(){
        var todoText = $inputElement.value
        todos.push(todoText)
        $inputElement.value = ''
        printList()
    }

    $buttonElement.addEventListner('click', function(){
        addTodo()
    })

    printList()
```

### Javascript - Parte 3

```js
    var $listElement = document.querySelector('#app ul')
    var $inputElement = document.querySelector('#app input')
    var $buttonElement = document.querySelector('#app button')
    var todos = [
        'Fazer Café',
        'Estudar Javascript',
        'Estudar para prova de matemática'
    ]

    function printList(){
        $listElement.innerHTML = ''
        for(todo of todos){
            var todoElement = document.createAttribute('li')
            var todoText = document.createTextNode(todo)
            var linkElement = document.createElement('a')
            var linkText = document.createTextNode('Excluir')
            var pos = todos.indexOf(todo)
            linkElement.setAttribute('href', '#')
            linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
            linkElement.appendChild(linkText)
            todoElement.appendChild(todoText)
            listElement.appendChild(todoElement)
        }
    }

    function addTodo(){
        var todoText = $inputElement.value
        todos.push(todoText)
        $inputElement.value = ''
        printList()
    }

    $buttonElement.addEventListner('click', function(){
        addTodo()
    })

    function deleteTodo(pos){
        todos.splice(pos, 1)
        printList()
    }

    printList()
```

### Javascript - Parte 4

```js
    var $listElement = document.querySelector('#app ul')
    var $inputElement = document.querySelector('#app input')
    var $buttonElement = document.querySelector('#app button')

    var todos = JSON.parse(localStorage.getItem('list_todos')) || []

    function printList(){
        $listElement.innerHTML = ''
        for(todo of todos){
            var todoElement = document.createAttribute('li')
            var todoText = document.createTextNode(todo)
            var linkElement = document.createElement('a')
            var linkText = document.createTextNode('Excluir')
            var pos = todos.indexOf(todo)
            linkElement.setAttribute('href', '#')
            linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
            linkElement.appendChild(linkText)
            todoElement.appendChild(todoText)
            listElement.appendChild(todoElement)
        }
    }

    function addTodo(){
        var todoText = $inputElement.value
        todos.push(todoText)
        $inputElement.value = ''
        printList()
        saveToStorage()
    }

    $buttonElement.addEventListner('click', function(){
        addTodo()
    })

    function deleteTodo(pos){
        todos.splice(pos, 1)
        printList()
        saveToStorage()
    }

    function saveToStorage(){
        localStorage.setItem('list_todos', JSON.stringfy(todos))
    }

    function 

    printList()
```