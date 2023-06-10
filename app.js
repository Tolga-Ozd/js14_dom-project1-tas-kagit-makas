//* ------ Selectors ------- */
const selectionArticle =document.querySelector(".selection")

//Seçilen elemanların taşıyıcıları
const yourChoiceDiv = document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")

//message
const messagePar = document.querySelector(".message")

//score
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")
const topScoreSpan = document.getElementById("top-score")

//Modal
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainBtn =document.getElementById("play-again")

//* ------- Variables ------- */

let userSelectImg = document.createElement("img")
let pcSelectImg = document.createElement("img")

//colors
const YELLOW = "#ffc538"
const RED = "#fb778b"
const GREEN = "#5ab7ac"

//* ------- Event Listeners ------- */
 
selectionArticle.addEventListener("click" , (e) => {
    console.log(e.target.id)
    if(e.target.id) {
        userSelectImg.src = `./assets/${e.target.id}.png`
        userSelectImg.alt = e.target.id
        yourChoiceDiv.appendChild(userSelectImg)
        createPcSelection()
    }
})

playAgainBtn.addEventListener("click", () =>{
    // modalCardSection.classList.toggle("show")
    // modalCardSection.classList.toggle("remove")
    modalCardSection.style.display = "none"
    window.location.reload() 
})


//* ------- Functions ------- */
const createPcSelection = () => {
    const pcArr = ["rock" , "paper" , "scissor"]
    pcRandom = pcArr[Math.floor(Math.random()*3)]
    pcSelectImg.src = `./assets/${pcRandom}.png`
    pcSelectImg.alt = pcRandom
    pcChoiceDiv.appendChild(pcSelectImg)
    calculateResult()
}

//! eşitlik durumu:
const calculateResult = () => {

    if(userSelectImg.alt === pcSelectImg.alt){
        draw()
    }else{
        if (userSelectImg.alt === "rock") {
            pcSelectImg.alt === "paper" ? youLost() : youWin()
          } else if (userSelectImg.alt === "scissor") {
            pcSelectImg.alt=== "rock" ? youLost() : youWin()
          } else if (userSelectImg.alt === "paper") {
            pcSelectImg.alt === "scissor" ? youLost() : youWin()
          }
    }

    if(pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
        topScoreSpan.innerHTML = `${yourScoreSpan.textContent} : ${pcScoreSpan.textContent} `
        openModel()
    }    
}

const draw = () => {
    messagePar.textContent = "Its a Draw"
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
}

const youLost = () => {
    messagePar.textContent = "You Lost"
    scoreCardSection.style.color = RED
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent++
}

const youWin = () => {
    messagePar.textContent = "You Win"
    scoreCardSection.style.color = GREEN
    messagePar.style.backgroundColor = GREEN
    yourScoreSpan.textContent++
}

const openModel = () => {
    modalCardSection.classList.add("show")

    if(yourScoreSpan.textContent === "10") {
        finalMessagePar.textContent = "✨ You Wİn 👏"
        document.querySelector(".modal").style.backgroundColor = GREEN
        playAgainBtn.style.color = GREEN
    }else{
        finalMessagePar.textContent = "😏You Lost🙄"
        document.querySelector(".modal").style.backgroundColor = RED
        playAgainBtn.style.color = RED
    }

}















//?Resimler     // ilkel yöntem 
// const rockImg = document.getElementById("rock")
// const paperImg = document.getElementById("paper")
// const scissorImg = document.getElementById("scissor")


// rockImg.addEventListener("click" , () =>{
//     image.src ="./assets/rock.png"
//     image.alt = "rock"
//     yourChoiceDiv.appendChild(image)
// })





