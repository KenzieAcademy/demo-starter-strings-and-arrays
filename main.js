// where we store our items
let conveyorBeltItems = []

let placeOrderButton = document.querySelector('#placeOrder')

// event listener signature is ('eventName', callbackFunction)
// callback signature is ( eventObject )

// let clickHandler = function ( eventObject ) {
    // code here
// }


placeOrderButton.addEventListener('click', function ( eventObject ) {
    let newOrder = placeOrder()
    console.log(newOrder)
    // mutating function does not need to be captured in a variable
    conveyorBeltItems.unshift(newOrder)
    renderConveyorBelt(conveyorBeltItems)
})

// lines 2, 4, 14
// on click event line 15 -> to functions.js
// 16, 18, 19 -> to functions.js

let splitOrderButton = document.querySelector('#splitOrder')

splitOrderButton.addEventListener('click', function ( eventObject ) {
    let newOrder = placeOrder()
    let newOrderArray = newOrder.split(' ')
    console.log(newOrderArray)
    // non-mutating function needs to be captured in a variable as it returns the new value
    // concat returns a new array. It is legal javascript to reassign a variable using a return value - even when the variable is used to get that value
    // same as index += 1 or index = index + 1
    conveyorBeltItems = newOrderArray.concat(conveyorBeltItems)
    renderConveyorBelt(conveyorBeltItems)
})


let shipOutButton = document.querySelector('#shipOut')

shipOutButton.addEventListener('click', function ( eventObject ) {
    // is a mutating function with a return value of new length of array
    conveyorBeltItems.pop()
    renderConveyorBelt(conveyorBeltItems)
})
