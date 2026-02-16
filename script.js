const option = ["rock","paper","scissors"]
randomIndex = Math.floor(Math.random() * option.length);
computer_choice = option[randomIndex] 
console.log(computer_choice) 
rock = document.getElementById("rock") 
paper = document.getElementById("paper") 
scissors = document.getElementById("scissors") 
const modal = document.getElementById("modal"); 
const msg = document.getElementById("msg"); 
const close = document.getElementById("close"); 
const ok = document.getElementById("ok"); 
rock.addEventListener("click", ()=>{ 
    play("rock") 
}) 
paper.addEventListener("click", ()=>{ 
    play("paper") 
}) 
scissors.addEventListener("click", ()=>{ 
    play("scissors") 
}) 
function play(player_choice) { 
    if (player_choice == computer_choice) { 
        block("it's a tie!!"); 
       
    } 
    else if ( (player_choice === "rock" && computer_choice === "scissors") || (player_choice === "paper" && computer_choice === "rock") || (player_choice === "scissors" && computer_choice === "paper") ){ 
        block("you win!!"); 
        
    }
    else{ block("you Lose !!!") 
        
    } } 
    function block (result){ 
        modal.style.display = 'block'; 
        msg.textContent = `${result}`; 
        close.addEventListener('click',()=>{ 
            modal.style.display = 'none';
            location.reload();  
        }) 
        ok.addEventListener('click',()=>{ 
            modal.style.display = 'none';
            location.reload();  
        }) 
    }