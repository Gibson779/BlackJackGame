
let firstCard = 10
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false

if (sum<= 20){
    console.log("Do you want to draw a new card")
} else if (sum === 21){
    console.log("Wohhoo!")
    hasBlackJack = true
}else {
console.log("you are out")

}

console.log(hasBlackJack)