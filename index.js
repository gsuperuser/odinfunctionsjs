function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'rock';
    else if (choice == 1) return 'paper';
    else return 'scissors';
}

function getHumanChoice()
{
    const takechoice =  prompt("Enter rock, paper, or scissors:");
    choice = takechoice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors')
    {
        return choice;
    }
}

let hScore = 0;
let cScore = 0;


const hchoice = getHumanChoice();
const cchoice = getComputerChoice();

function playRound(hchoice, cchoice)
{
    hchoice = hchoice.toLowerCase();
    cchoice = cchoice.toLowerCase();

    if (hchoice == cchoice) return "Its a tie!";
    else if(hchoice == 'scissors' && cchoice == 'rock') return hScore++ ;
    else if(hchoice == 'paper' && cchoice == 'rock') return hScore++ ;
    else if(hchoice == 'scissors' && cchoice == 'paper') return hScore++ ;
    else return cScore++ ;

       
}

function playgame(){
    for (let i =0  ; i < 5; i++)
        playRound(hchoice, cchoice);

    if (hScore ==   cScore) {
        console.log("It's a tie!");
    }
    else if(hScore > cScore){console.log("You WIn");}
    else {console.log("COmputer Wins");}
}

playgame();