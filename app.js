let check = document.querySelector('.check')
let scores = document.querySelector('.number')
let guess = document.querySelector('.guess')
let answer = document.querySelector('h1')


const randomNumberGenerator = () =>{
    let randomNumber = Math.floor(Math.random() * 5 + 1)

    guess.value = randomNumber 
    
    return randomNumber
}

check.addEventListener('click', randomNumberGenerator)

const randomNumberGenerator2 = () =>{
    let randomNumber2 = Math.floor(Math.random() * 5 + 1)

    scores.innerText = randomNumber2

    if (randomNumber2 == randomNumberGenerator() ) {
        answer.innerText = 'CORRECT!!!'
    
    } else {
        answer.innerText = 'Opps...Try Again'    
    }  


}

check.addEventListener('click', randomNumberGenerator2)
