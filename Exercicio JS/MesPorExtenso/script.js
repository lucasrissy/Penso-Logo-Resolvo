
function send(){
    let month = document.getElementById('month')
    let writeMonth = document.getElementById('writeMonth')

    if(month.value.toString().slice(5,7) ==='01'){
        writeMonth.innerText = 'Janeiro'
    }else if(month.value.toString().slice(5,7) ==='02'){
        writeMonth.innerText = 'Fevereiro'
    }else if(month.value.toString().slice(5,7) ==='03'){
        writeMonth.innerText = 'Marco'
    }else if(month.value.toString().slice(5,7) ==='04'){
        writeMonth.innerText = 'Abril'
    }else if(month.value.toString().slice(5,7) ==='05'){
        writeMonth.innerText = 'Maio'
    }else if(month.value.toString().slice(5,7) ==='06'){
        writeMonth.innerText = 'Junho'
    }else if(month.value.toString().slice(5,7) ==='07'){
        writeMonth.innerText = 'Julho'
    }else if(month.value.toString().slice(5,7) ==='08'){
        writeMonth.innerText = 'Agosto'
    }else if(month.value.toString().slice(5,7) ==='09'){
        writeMonth.innerText = 'Setembro'
    }else if(month.value.toString().slice(5,7) ==='10'){
        writeMonth.innerText = 'Outubro'
    }else if(month.value.toString().slice(5,7) ==='11'){
        writeMonth.innerText = 'Novembro'
    }else{
        writeMonth.innerText = 'Dezembro'
    }
   

    
}
