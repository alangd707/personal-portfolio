let bowlSize = 'Small'
let lettuceType = []
let veggies = []
let fruits = []
let meats = []
let dressing = []
let totalPrice = 0
let finalTotalPrice = 0

function buttonClick(type,which,price) { // Function used to determine if the box that's click is checked and adds the item that is checked to arrays.
    if (type == "size") { // Because these are radiobuttons, variables aren't lists.
        bowlSize = which
    }
    if (type == "dressing") {
        dressing = which
    }

    if (document.getElementById(which).checked == true) { // If statement to determine if the button that was clicked was true/false. If positive, add element.

        if (type == "lettuceType") {
            lettuceType.push(which)
            totalPrice += price
        }
        else if (type == "veggies") {
            veggies.push(which)
            totalPrice += price
        }
        else if (type == "fruits") {
            fruits.push(which)
            totalPrice += price
        }
        else if (type == "meats") {
            meats.push(which)
            totalPrice += price
        }
    }

    else { // If false, remove element.

        if (type == "lettuceType") {
            lettuceType.splice(lettuceType.indexOf(which), 1)
            totalPrice -= price
        }
        else if (type == "veggies") {
            veggies.splice(veggies.indexOf(which), 1)
            totalPrice -= price
        }
        else if (type == "fruits") {
            fruits.splice(fruits.indexOf(which), 1)
            totalPrice -= price
        }
        else if (type == "meats") {
            meats.splice(meats.indexOf(which), 1)
            totalPrice -= price
        }
    }
}

function calculateTotalPrice() { // Calculates the total price at the end from clicking the button.
    if (bowlSize == "Small") {
        finalTotalPrice = totalPrice
    }
    else if (bowlSize == "Medium") {
        finalTotalPrice = totalPrice * 2
    }
    else if (bowlSize == "Large") {
        finalTotalPrice = totalPrice * 3
    }

    console.log(finalTotalPrice)
    console.log(bowlSize + " " + lettuceType + " " + veggies + " " + fruits + " " + meats + " " + dressing)
    alert(`You ordered a ${bowlSize} salad with 
    Lettuce  : ${lettuceType} 
    Veggies  : ${veggies}
    Fruits   : ${fruits}
    Meats    : ${meats}
    Dressing : ${dressing}
    
    Price: $${totalPrice}`)
}