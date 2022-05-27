const homePage = () => {
    window.location.reload()
}

const openPage = (pageName, element) => {
    document.getElementById('jumb').style.display = 'none'
    var i, tabContents, tabLinks
    tabContents = document.getElementsByClassName('tab-content')
    document.body.style.backgroundImage = ""
    for(i = 0; i < tabContents.length; i++){
        tabContents[i].style.display = 'none'
    }
    tabLinks = document.getElementsByClassName('tab-link')
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = 'block'
    element.style.backgroundColor = '#009579'
    element.style.color = 'white'
    if(pageName === 'placeOrder'){
        document.body.style.backgroundImage = "url('pizza-img.jpg')"
    }
}

var orderNumber = 2022050001
const orderIDArray = new Array()
var size, quantity, i
var topping = ""
var pizzaItem = ""
const submitOrder = () => {
    var sizes = document.getElementsByName('pizza-size')
    for(i = 0; i < sizes.length; i++){
        if(sizes[i].checked){
            size = (sizes[i].value)
            break
        }
    }
    if(size === undefined){
        alert("Please choose size")
        return
    }

    var toppings = document.getElementsByName('pizza-toppings')
    for(i = 0; i < toppings.length; i++){
        if(toppings[i].checked){
            topping += toppings[i].value + ", "
        }
    }
    if(topping === ""){
        alert("Please choose topping")
        return
    }

    var quantity = document.getElementById('quantity').value
    if(quantity == "0" || quantity == ""){
        alert("Please enter valid quantity")
        return
    }

    alert("Order placed! Your order ID is: " + orderNumber)
    orderIDArray.push(orderNumber)
    orderNumber++;
    document.getElementById('placeOrder').style.display = 'none'
    emptyImg.style.display = 'none'
    document.getElementById('trackOrder').style.display = 'block'
    pizzaItem = size + " pizza - " + quantity + " Nos\nToppings: " + topping
    console.log(pizzaItem)
}


let orderBlock = document.getElementsByClassName('order-block')
let cardHeader = document.getElementsByClassName('card-header')
let parentDiv = document.getElementById('parent-div')
let emptyImg = document.getElementById('empty-img')


const createNewOrderColumn = (orderID) => {

    //creating a col of this structure
    /* <div class="col-md-4 col-xs-12 order-block">
    <div class="card text-center">
        <div class="card-header" id="order-ID-display">
                  Order ID : 
        </div>
        <div class="card-body">
                  <h5 class="card-title">Bill Amount : </h5>
                  <p class="card-text">Items: </p>
                  <div class="order-status">PIZZA BAKED</div>
                  
        </div>
        <div class="card-footer text-muted">
            <a href="#" class="btn btn-primary">Cancel Order</a>
        </div>
    </div>
</div> */

    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardHeaderDiv = document.createElement('div')
    let cardBodyDiv = document.createElement('div')
    let cardFooterDiv = document.createElement('div')
    let cardTitleP = document.createElement('p')
    let cardTextH5 = document.createElement('h5')
    let orderSpan = document.createElement('div')
    let cancelButton = document.createElement('button')
    

    let cardHeaderText = document.createTextNode('Order ID:'+ orderID)
    let cardTitleText = document.createTextNode('Items: ' + pizzaItem)
    let cardText = document.createTextNode('Bill Amount: ₹' + Math.floor(Math.random()*1000))
    let orderText = document.createTextNode('Chef has received the order and started preparing')
    let btnText = document.createTextNode('Cancel Order')
    
    
    parentDiv.appendChild(colDiv)
    colDiv.appendChild(cardDiv)
    cardDiv.appendChild(cardHeaderDiv)
    cardDiv.appendChild(cardBodyDiv)
    cardDiv.appendChild(cardFooterDiv)
    cardBodyDiv.appendChild(cardTitleP)
    cardBodyDiv.appendChild(cardTextH5)
    cardBodyDiv.appendChild(orderSpan)

    cardHeaderDiv.appendChild(cardHeaderText)        
    cardTitleP.appendChild(cardTitleText)
    cardTextH5.appendChild(cardText)
    orderSpan.appendChild(orderText)
    cardFooterDiv.appendChild(cancelButton)
    cancelButton.appendChild(btnText)
    
    colDiv.classList.add('col-md-4', 'col-xs-12', 'order-block')
    cardDiv.classList.add('card', 'text-center')
    cardHeaderDiv.classList.add('card-header')
    cardBodyDiv.classList.add('card-body')
    cardTitleP.classList.add('card-title')
    cardTextH5.classList.add('card-text')
    orderSpan.classList.add('order-status')
    cancelButton.classList.add('btn', 'btn-primary', 'cancel-btn')
    cardFooterDiv.classList.add('card-footer', 'text-muted')

    colDiv.style.display = 'block'

    orderSpan.id = orderID

    cancelButton.addEventListener('click', () => {
        // parentDiv.removeChild(colDiv)
        colDiv.style.display = 'none'
    })
}

const displayingOrders = new Array()
const executeOrder = () => {
    
    emptyImg.style.display = 'none'
    let orderID = parseInt(document.getElementById('order-ID-input').value)
    if(displayingOrders.includes(orderID)){
        return
    }
    if(orderID=="" || !orderIDArray.includes(parseInt(orderID))){
        alert("Please enter a valid order ID")
        return
    }
    createNewOrderColumn(orderID)
    displayingOrders.push(orderID)

    document.getElementById(orderID).innerText = 'Order placed'
    chefReceived(orderID)
    .then(blendIngredients)
    .then(mixirstCheese)
    .then(addLiquidFlavorsandColors)
    .then(freeze)
    .then(andBulkyFlavorings)
    .then(packageRecieved)
    .then(() => {
        document.getElementById(orderID).innerText = 'Order ready'
    }).catch((err) => {
        console.log(err)
    })
}
const chefReceived = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Chef has recieved the order and has started preparing'
            resolve(orderNo)
        }, 2000)
    })
}

const blendIngredients = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Blend Ingredients'
            resolve(orderNo)
        }, 1000)
    })
}

const mixirstCheese = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Pasteurize Mix'
            resolve(orderNo)
        }, 2000)
    })
}

const addLiquidFlavorsandColors = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Add Liquid Flavors and Colors'
            resolve(orderNo)
        }, 2000)
    })
}

const freeze = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Freeze'
            resolve(orderNo)
        }, 3000)
    })
}

const andBulkyFlavorings = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Add Fruits, Nuts, and Bulky Flavorings'
            resolve(orderNo)
        }, 5000)
    })
}

// const oreganoAdded = (orderNo) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById(orderNo).innerText = ' packed'
//             resolve(orderNo)
//         }, 8000)
//     })
// }

const packageRecieved = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Package recieved at counter'
            resolve(orderNo)
        }, 2000)
    })
}
