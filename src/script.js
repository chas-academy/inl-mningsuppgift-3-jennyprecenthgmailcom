let varukorg = []
const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const addButton = document.getElementById("addButton")
const cartList = document.getElementById("cartList")

function clearInput() {
    productInput.value = ""
    priceInput.value = ""
}

function addToCart() {
    const productName = productInput.value
    const productPrice = Number(priceInput.value)
    const newProduct = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1,
    }

    let itemExists = false

    for (item of varukorg) {
        if (item.productName === productName) {
            item.quantity++
            itemExists = true
        }
    }

    if(!itemExists) {
        varukorg.push(newProduct)
    }
    renderCart()
    clearInput()

}

function renderCart() {

    cartList.innerHTML = ""
    for (item of varukorg) {
        const li = document.createElement("li")
        li.textContent = `${item.productName} - ${item.productPrice}kr (x${item.quantity})`
        cartList.appendChild(li)
    }
}

addButton.addEventListener("click", () => {
    addToCart()
})
