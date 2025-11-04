import { products } from "../data/products.js"
//console.log(friends)

const myNav = document.querySelector('nav')

const myViewer = document.querySelector('#saleItems')

//navigation items
products.forEach(product => {
   console.log(product)
    const myBtn = document.createElement('button')
    myBtn.textContent = product.name
    myBtn.addEventListener('click', () => showProduct(product))
    myNav.appendChild(myBtn)
})



function showProduct(product) {
console.log(product)

let productSection = document.createElement("section")
let productName = document.createElement("h2")
let productPrice = document.createElement("p")
let productPhoto = document.createElement("img")
let productCategory = document.createElement("ul")
let productStock = document.createElement("p")

productName.textContent = `${product.name}`
productStock.textContent = `Product is in stock: ${product.inStock}`
productPhoto.src = `images/${product.image}`
productPhoto.alt = product.name
productPrice.textContent = `Price: $${product.price}`

product.categories.forEach(category => {

let theHobby = document.createElement('li')
theHobby.textContent = category 
productCategory.appendChild(theHobby)
})

//assemble the card
productSection.appendChild(productName)
productSection.appendChild(productPhoto)
productSection.appendChild(productPrice)
productSection.appendChild(productCategory)
productSection.appendChild(productStock)

myViewer.textContent = ""
myViewer.appendChild(productSection)
} //end of the function