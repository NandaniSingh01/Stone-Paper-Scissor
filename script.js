let userScore = 0;
let computerScore = 0;
const msg = document.querySelector("#Message");
const choices = document.querySelectorAll(".Choice");
const displayUser = document.querySelector("#displayUser");
const displayComp = document.querySelector("#displayComp");
const userS = document.querySelector("#User-Score");
const compS = document.querySelector("#Computer-Score");

choices.forEach((Choice)=>{
    Choice.addEventListener("click", ()=>{
        const userChoice = Choice.getAttribute("id");
        playGame(userChoice);
        
    });
});

const display = (userChoice,compChoice)=>
{
    displayUser.innerText = "Your Choice : " + userChoice;
    displayComp.innerText = "Computer Choice : " + compChoice;    
};

const genCompChoice = ()=>
{
    const options = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>
{
    msg.innerText = "Game was Draw ! Play Again";
    console.log("Game was Draw !");
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,userChoice,compChoice)=>
{
    if(userWin)
    {      
        userScore++;  
        userS.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        console.log("You Win !");
    }
    else{
        computerScore++;
        compS.innerText = computerScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        console.log("You Lose!");
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("user choice = " , userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = " , compChoice);
    display(userChoice,compChoice);
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if( userChoice === 'Rock')
        {
            userWin = compChoice === 'Paper'? false : true;
        }
        else if (userChoice === 'Paper'){
            userWin = compChoice === 'Scissor'? false : true;
        }
        else{
            userWin = compChoice === 'Rock'? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

