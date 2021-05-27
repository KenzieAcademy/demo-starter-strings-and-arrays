

// helper functions are intended to versatile and reusable
let placeOrder = function () {
    let orderInput = document.querySelector('#orderInput')
    let order = orderInput.value
    return order
}

let renderConveyorBelt = function ( orderArray ) {
    let conveyorBelt = document.querySelector('#conveyorBelt')
    conveyorBelt.innerHTML = ''
    for (let index = 0; index < orderArray.length; index += 1) {
        let orderTag = document.createElement('p')
        orderTag.innerText = orderArray[index]
        conveyorBelt.append(orderTag)
    }
}

// no code is actually run in this file. Only variable declarations
// line 4, 10 - declare functions
// from main.js line 15 -> line 5, 6, 7 -> back to main.js
// from main.js line 19 -> line 11, 12, 13 - 16 (loops)
