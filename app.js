let userScore=0;
let compScore=0;

const choice= document.querySelectorAll(".choices-item")
const msg= document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const compChoice=()=>{
    const options=['rock','paper','scissor']
    const randIndex=Math.floor(Math.random()*3)
    return options[randIndex]
}

const drawgame=()=>{
    console.log("Draw")
    msg.innerText="You Draw"
    msg.style.backgroundColor="yellow"
}

const showWinner=(userWin,choiceId,compId)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore
        console.log("You Win")
        msg.innerText=`You Win, ${choiceId} beats ${compId}`
        msg.style.backgroundColor="green"
    }
    else{
        compScore++
        compScorePara.innerText=compScore
        console.log("You lose")
        msg.innerText=`You lose, ${compId} beats ${choiceId}`
        msg.style.backgroundColor="red"
    }
}

const playGame=(choiceId)=>{
    console.log("User Choice", choiceId)

    const compId=compChoice()
    console.log("Computer Choice",compId)

    if(choiceId===compId){
        drawgame()
    }
    else{
        let userWin= true

        if(choiceId==='rock'){
            userWin= compId==='paper'?false:true
        }
        else if(choiceId==='paper'){
            userWin= compId==='scissor'?false:true
        }
        else{
            userWin= compId==='rock'?false:true
        }
        showWinner(userWin,choiceId,compId)
    }
}

choice.forEach(
    (event)=>{
        console.log(event)
        event.addEventListener("click",
            ()=>{
                const choiceId= event.getAttribute("id")
                playGame(choiceId)
            }
        )
    }
)