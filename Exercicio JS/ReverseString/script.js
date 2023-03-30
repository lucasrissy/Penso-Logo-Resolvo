
function reverse (){
    let reverseText = document.querySelector('span');


    let str = document.querySelector('#text').value
    str = str.split('').reverse().join('')
    reverseText.innerText = str
}