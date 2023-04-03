let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ad, consectetur consequatur ex architecto tenetur debitis reiciendis possimus suscipit dolorum, temporibus voluptatem beatae nostrum deleniti. Expedita quisquam maiores adipisci nesciunt?'

let array = str.split(' ')

console.log(array[8])

function length(array){
    let maxString = []
    for(i = 0; i< array.length; i++){
       
        if(array[i].length > maxString.length){
           
            maxString = array[i]
        }
        
    }
    return maxString
}

console.log(length(array))