let yourscoreo=0;
let compscoreo=0;
const message1=document.querySelector("#msg");
const scoress=document.querySelector("#yourscore");
const scoressc=document.querySelector("#compscore");
const restartButton = document.querySelector("#resetb");
const compchoice=()=>{
    const arr=["snake","water","gun"];
    const arri=Math.floor(Math.random()*3);
    return arr[arri];

}

const drawn=()=>{
    console.log("Game Was Drawn");
    message1.innerText="Game Was Drawn!";
    message1.style.color="black";
}
const playgame=(userchoice)=>{

    console.log("user choice",userchoice);
    const computchoice=compchoice();
    console.log("computer choice",computchoice);
    
    
    if(userchoice===computchoice){
        drawn();
        
    }
    else{
        let userwin=false;
        if(userchoice=="water" && computchoice=="gun"){
            userwin=true;
        }
        else if(userchoice=="snake" && computchoice=="water"){
            userwin=true;
        }
        else if(userchoice=="gun"&& computchoice=="snake"){
            userwin=true;
        }
        
        if(userwin){
            console.log("You Score!");
            message1.innerText="You Score!";
            message1.style.color="green";
            yourscoreo++;
            scoress.innerText=yourscoreo;
    
        }
        else{
            console.log("You Lose!");
            message1.innerText="Computer Score!";
            message1.style.color="red";
            compscoreo++;
            scoressc.innerText=compscoreo;
        }
        
    }
    if(yourscoreo===10){
        message1.innerText="Finally You win!";
        disable();
    }
    else if(compscoreo===10){
        message1.innerText="Computer Win Try Again!";
        disable();

    }
}
const resetGame = () => {
    yourscoreo = 0;
    compscoreo = 0;
    scoress.innerText = yourscoreo;
    scoressc.innerText = compscoreo;
    message1.innerText = "Game Restarted! Make Your CShoice.";
    message1.style.color = "black"; 
    restartButton.style.display = "block";
    enable();
};
const disable=()=>{
    const choicesdis=document.querySelectorAll(".choice");
    choicesdis.forEach((choice)=>{
        choice.style.pointerEvents = "none";
    });
};
const enable = () => {
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice) => {
        choice.style.pointerEvents = "auto"; 
    });
};
restartButton.addEventListener("click", resetGame);


const choices=document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    
    });
});