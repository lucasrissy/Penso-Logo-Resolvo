
let img = document.getElementById('img');

let onOrOff = 2;
function OnLamp(){
    

    if(onOrOff === 2){
        img.setAttribute('src','ONLampada.jpg')
        onOrOff = 1;
    }else{
        img.setAttribute('src','OFFLampada.jpg')
        onOrOff = 2;
    }
   
}