var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * 100)
 cart.push({ [item]: itemPrice })
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var shoppingList = "In your cart, you have "
  if (cart.length === 0) {
    shoppingList = "Your shopping cart is empty."
    console.log(shoppingList)
    return
  }

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {

      if (cart.length === 1) {
        shoppingList += `${item} at $${cart[i][item]}.`
        console.log(shoppingList)
        return
      }
      else if (i === cart.length -1) {
        shoppingList += `and ${item} at $${cart[i][item]}.`
//        console.log("test1"
      }
      else if (i === 0 && cart.length === 2){
        shoppingList += `${item} at $${cart[i][item]} `
//        console.log('test2')
      }
      else {
        shoppingList += `${item} at $${cart[i][item]}, `
      }
    }
  }
  console.log(shoppingList)
}
addToCart('peaches')
addToCart('plums')
addToCart('oranges')
removeFromCart('oranges')
console.log(cart.length)
viewCart()
placeOrder()

function total() {
  var totalBill = 0

  for ( var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      totalBill += cart[i][item]
    }
  }
  return totalBill
}

function removeFromCart(item) {
var foundItem = false
var i = 0
// for (var i = 0; i < cart.length; i++) {
   for (let value in cart) {
     console.log(item)
     console.lot(value)
     console.log(cart)
      if ( value === item ) {
        cart.splice(i, 1)
        console.log(item)
        console.log(value)
        console.log(cart)
        foundItem = true
        return cart
      }
      else if (i === cart.length - 1 && foundItem === false) {
        console.log("That item is not in your cart.")
      }
      else {
        i++
      }

  }
}

function placeOrder(cardNumber) {
if (cardNumber === undefined) {
      console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    console.log(cart)
    return cart
  }
}
