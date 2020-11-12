var playerChoice, cpuChoice;
var winner;
//1 rock, 2 paper, 3 scissors
function play(choice){
	paragraph = document.getElementById("paragraph");
	paragraphCpuChoice = document.getElementById("paragraphCpuChoice");
	imgCpuChoice = document.getElementById("imgCpuChoice");
	cpuChoice = Math.floor(Math.random() * 3) + 1;

	if(choice == cpuChoice){
		winner = ", it's a tie!";
	}else if((choice == 1 && cpuChoice == 3) || (choice == 2 && cpuChoice == 1) || (choice == 3 && cpuChoice == 2)){
		winner = ", you win!";
	}else if((cpuChoice == 1 && choice == 3) || (cpuChoice == 2 && choice == 1) || (cpuChoice == 3 && choice == 2)){
		winner = ", the computer wins!";
	}

	playerChoice = shoot(choice);
	cpuChoice = shoot(cpuChoice);

	cpuImg(cpuChoice);
	paragraphCpuChoice.innerHTML = null;
	paragraph.innerHTML = "You chose " + playerChoice + ", the CPU chose " + cpuChoice + winner;
}

function cpuImg(cpuChoice){
	switch(cpuChoice){
		case "rock": imgCpuChoice.src = "img/rock.png";
			break;
		case "paper": imgCpuChoice.src = "img/paper.png";
			break;
		case "scissors": imgCpuChoice.src = "img/scissors.png";	
	}
}

function shoot(somebodysChocie){
		switch(somebodysChocie){
		case 1: return "rock";
			break;
		case 2: return "paper";
			break;
		case 3: return "scissors";
	}
}