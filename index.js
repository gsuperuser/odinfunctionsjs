function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'rock';
    else if (choice == 1) return 'paper';
    else return 'scissors';
}

function getHumanChoice(takechoice)
{
    
    choice = takechoice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors')
    {
        return choice;
    }
}

let hScore = 0;
let cScore = 0;


// const hchoice = getHumanChoice();
// const cchoice = getComputerChoice();

function playRound(hchoice, cchoice)
{
    hchoice = hchoice.toLowerCase(); 
    cchoice = cchoice.toLowerCase();

    if (hchoice == cchoice) {
        return "It's a tie! Both chose " + hchoice;
    }

    else if (
        (hchoice === 'rock' && cchoice === 'scissors') ||  // Rock beats Scissors
        (hchoice === 'paper' && cchoice === 'rock') ||      // Paper beats Rock
        (hchoice === 'scissors' && cchoice === 'paper')    // Scissors beats Paper
    ) {
        hScore++;
        return `You win! ${hchoice} beats ${cchoice}`;
    }

    else { 
        cScore++;
        return `You lose! ${cchoice} beats ${hchoice}`;
    }
}

const startRound = document.querySelector("#buttonsdiv");
const result = document.querySelector(".resultdiv");
const resultp = document.createElement("p");
console.log(result);
result.appendChild(resultp);
// result.classList.add("result-round");
const btn1 = document.querySelector("#rock");                                           
const btn2 = document.querySelector("#scissors");
const btn3 = document.querySelector("#paper");
let hchoice;
btn2.addEventListener("click", () => {
    const hchoice = getHumanChoice("scissors");
    const cchoice = getComputerChoice();
    playRound(hchoice, cchoice);
    result.textContent = "Human" + hScore + "Computer" + cScore;
});
btn3.addEventListener("click" , () => {
    const hchoice = getHumanChoice("paper");
    const cchoice = getComputerChoice();
    playRound(hchoice, cchoice);
    result.textContent = "Human" + hScore + "Computer" + cScore;
});
startRound.appendChild(btn1, btn2, btn3);
btn1.addEventListener("click" , () => {
    const hchoice = getHumanChoice("rock");
    const cchoice = getComputerChoice();
    console.log(playRound(hchoice, cchoice));
    result.textContent = "Human" + hScore + "Computer" + cScore;
});


console.log(hScore);
console.log(cScore);