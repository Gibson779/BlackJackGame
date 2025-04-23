
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true


if (sum <= 20){
    console.log("Do you want to draw a new card")
} else if (sum === 21){
    console.log("Wohhoo!")
    hasBlackJack = true
    
}else {
console.log("you are out")
isAlive = false

}

console.log(hasBlackJack)
console.log(isAlive)


