
let firstNumber = document.getElementById('firstNumber')
let secondNumber = document.getElementById('secondNumber')
let result;
let show = document.querySelector('#result')

function add(){
    result = parseInt(firstNumber.value)  + parseInt(secondNumber.value) ;
    console.log(result)
    show.innerHTML =  `${result}` 
}

function sub(){
    result = parseInt(firstNumber.value)  - parseInt(secondNumber.value) ;
    console.log(result)
    show.innerHTML =  `${result}` 
}

function mul(){
    result = parseInt(firstNumber.value)  * parseInt(secondNumber.value) ;
    console.log(result)
    show.innerHTML =  `${result}` 
}

function div(){
    result = parseInt(firstNumber.value)  / parseInt(secondNumber.value) ;
    console.log(result)
    show.innerHTML =  `${result}` 
}
