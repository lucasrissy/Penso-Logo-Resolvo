let pessoa ={
    name:  'Lucas' ,
    age:  26 ,
    date: 24/12/1996,
}



function enviar(){
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let date = document.getElementById('date').value 

    pessoa.name = name
    pessoa.age = age
    pessoa.date = date
     
}

