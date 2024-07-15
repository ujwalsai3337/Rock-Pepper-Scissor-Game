

let UserScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");

const userscore=document.querySelector("#user-score")
const compscore=document.querySelector("#comp-score")


let msg=document.querySelector("#pp");

const getcompchoice=() =>{
    const options=["rock","paper","scissors"]
    const ranidx=Math.floor(Math.random()*3)
    return options[ranidx];
    
}


const showwinner=(userwin,userchoice,compchoice)=>{
    if (userwin){
        UserScore++;
        userscore.innerText=UserScore;
        console.log("you win! 💐🥳🥳");
        msg.innerText=`you win 💐🥳🥳 ! Your ${userchoice} beats ${compchoice}`;  
        msg.style.backgroundColor= "#FFD700";
     
        
        
    }
    else{
        compScore++;
        compscore.innerText=compScore;
        console.log("you lose 😋😇");
        msg.innerText=`you lose 😋😇  computers ${compchoice} beats ${userchoice}`;
        
        msg.style.backgroundColor = "#E34234"; 
    }
    
}
const drawgame=()=>{
    console.log("Game was draw");
    msg.innerText=`Game was Draw `;
    msg.style.backgroundColor="black";
}




const playgame=(userchoice) => {
    console.log("userchoice =",userchoice);
    // generate compchoice
    const compchoice=getcompchoice();
    console.log("comp choice =",compchoice );

    if(userchoice===compchoice){
        drawgame();
    } else
    {
        let userwin=true;
        if (userchoice==="rock"){
            // var=condition ? if cond true print :or else print ;
            userwin=compchoice==="paper" ? false : true;
            
        }
        else if (userchoice==="paper")
        {
            userwin=compchoice==="scissors" ? false :true;
        } else {
            userwin=compchoice=="rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choice.forEach((choice) =>{
    // console.log("choice");
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice clicked",c);
        playgame(userchoice);

     
    
    })
})




