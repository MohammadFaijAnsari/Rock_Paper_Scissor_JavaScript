let userscore=0;
let compscore=0;
const choices=document.querySelectorAll('.choice');
// console.log(choices);
const msg=document.querySelector("#msg");
// console.log(msg);
const userScorepara=document.querySelector('#user-score');
console.log(userScorepara);
const compScorepara=document.querySelector('#comp-score');
const computerChoice=()=>{
    const choice=['rock','paper','scissor'];
    const ranInd=Math.floor(Math.random()*3);
    return choice[ranInd];
}
const drawGame=()=>{
    console.log("Game was draw ");
    msg.innerHTML="Game was Draw Play Again";
    msg.style.background="green";
}
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userScorepara.innerText=userscore;
        console.log("You Win");
        msg.innerHTML=`You Win ${userchoice} beats ${compchoice}`;
        msg.style.background="red";
    }else{
        compscore++;
        compScorepara.innerText=compscore;
        console.log("You Loss");
        msg.innerHTML=`You loss ${compchoice} beats ${userchoice}`;
        msg.style.background="aqua";
    }
}
const playGame = (userchoice) =>{
    console.log("User Choice=",userchoice);
    //Generate computer choice
    const compchoice=computerChoice();
    console.log("Computer Choice=",compchoice);
    if(userchoice==compchoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        //scissor,paper
        if(userchoice=='rock'){
            userWin=compchoice ==='paper'?false:true;
        }else if(userchoice==='paper'){
            //rock,scissor
            userWin=compchoice==='scissor'?false:true;
        }else{
            userWin=compchoice==='rock'?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener('click',()=>{
        const choiceId=choice.getAttribute('id');
        // console.log("Choice was click",choiceId);
        playGame(choiceId);
    })
})