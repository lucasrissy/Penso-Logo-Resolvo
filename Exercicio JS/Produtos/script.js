
let products = ['iphone', 'phone', 1000, 'smartTv', 'televison', 349, 'smartwatches', 'watches', 239]

console.log(products)

for(i = 0; i < products.length; i++){
    console.log(i)
    document.querySelector('#list').innerHTML += `<span>${products[i]}</span></br>`
}
