let player = {
    name: "Per",  // Objects
    chips: 145
}

let cards = []  //Arrays 
let sum = 0
let hasBlackJack = false   // Booleans
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){                               // Return statements 
    let randomNumber = Math.floor (Math.random() *13) +1  // 0-12  //Math object
     if (randomNumber > 10){
        return 10
     } else if (randomNumber === 1) {
        return 11
     } else {
        return randomNumber
     }

}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] // reassigned the Array
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent= "Cards:"                

    for (let i = 0; i < cards.length; i ++)    {         // For Loop
    cardsEl.textContent += cards[i] + " "

}
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = ("Do you want to draw a new card") // If else statements
    } else if (sum === 21){                          // Comparison operators
       message = ("Wohhoo! BlackJack!")
        hasBlackJack = true
        
    }else {
    message = ("you are out")
    isAlive = false
    
    }
 messageEl.textContent = message
}

function newCard(){
   if (isAlive === true && hasBlackJack === false){  // AND Operators
    let card = getRandomCard()
    sum += card
    cards.push(card) // Pushed the Array
    renderGame()
   }

}



