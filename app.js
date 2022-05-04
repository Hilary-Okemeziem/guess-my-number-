let check = document.querySelector('.check')
let scores = document.querySelector('.number')
let guess = document.querySelector('.guess')
let answer = document.querySelector('h1')
let message = document.querySelector('.message')
let trial = document.querySelector('.score')

let startGame = () => {
    let numbers = [1,2,3,4,5]
    let random = Math.floor(Math.random()* numbers.length)
    scores.innerHTML = numbers[random]

if (guess.value == null || guess.value < 1 || guess.value > 5 || guess.value == "") {
    document.querySelector('.text').innerHTML = 'Please type a number ranging from 1-5';
    scores.innerHTML = '?'
    message.innerHTML = ''
    answer.innerHTML = ''
    trial.innerHTML = '5'
       
} else if (guess.value == numbers[random]) {
    answer.innerText = 'CORRECT!!!'
    message.innerText = 'CORRECT!!!'
    document.body.style.backgroundColor = 'green'
    trial.innerHTML = '5'
    
} else if(trial.innerText == 0){
    message.innerText = 'Game Over'
    answer.innerText = 'Game Over'
}
    
else {
    answer.innerText = 'Opps...Try Again' 
    message.innerText = 'Continue guessing'
    document.body.style.backgroundColor = 'red'
    trial.innerText--   
}
}

check.addEventListener('click', startGame)


// const randomNumberGenerator = () =>{
//     let randomNumber = Math.floor(Math.random() * 5 + 1)

//     guess.value = randomNumber 
    
//     return randomNumber
// }

// check.addEventListener('click', randomNumberGenerator)

// const randomNumberGenerator2 = () =>{
//     let randomNumber2 = Math.floor(Math.random() * 5 + 1)

//     scores.innerText = randomNumber2

//     if (randomNumber2 == randomNumberGenerator() ) {
//         answer.innerText = 'CORRECT!!!'
//         message.innerText = 'CORRECT!!!'
//         document.body.style.backgroundColor = 'green'
//         trial.innerText = '5'
    
//     } else if(trial.innerText == 0){
//         message.innerText = 'Game Over'

//     }else {
//         answer.innerText = 'Opps...Try Again' 
//         message.innerText = 'Continue guessing'
//         document.body.style.backgroundColor = 'red'
//         trial.innerText--   
//     } 
    
    
     

    
// }

// check.addEventListener('click', randomNumberGenerator2)

