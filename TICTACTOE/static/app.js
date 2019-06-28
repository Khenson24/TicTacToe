var players = [];
var markers = ["X", "O"];
players[0] = "Player1";
players[1] = "Player2";
var whoseTurn = 0;
var winX = false
let acc = 1;
let acc1 = 1;


var one = document.getElementById('0')
var two = document.getElementById('1')
var three = document.getElementById('2')
var four = document.getElementById('3')
var five = document.getElementById('4')
var six = document.getElementById('5')
var seven = document.getElementById('6')
var eight = document.getElementById('7')
var nine = document.getElementById('8')

    

var cells = document.querySelectorAll('.cell');

function play(cells){
    cells.innerHTML= markers[whoseTurn];
    togglePlayer();
    checkWinX();
    checkWinO();
}


function togglePlayer(){
    if (whoseTurn == 0){
        return whoseTurn = 1
    }
    else{
        whoseTurn=0
    }
}



function cleargame(){
    
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML=""
  }
}
function reset(){
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML=""
    }
    acc = 1
    acc1 = 1
  document.getElementById('10').innerHTML= "Player X Score: 0"
  document.getElementById('11').innerHTML= "Player O Score: 0"
}

function checkWinX(){
    if(one.innerHTML.includes("X") && two.innerHTML.includes("X") && three.innerHTML.includes("X")){
        document.getElementById('10').innerHTML= "Player X Score: " + acc++
        alert('PLAYER X WINS')
        cleargame();
    }
    else if(four.innerHTML.includes("X") && five.innerHTML.includes("X") && six.innerHTML.includes("X")){
        document.getElementById('10').innerHTML= "Player X Score: " + acc++
        alert('PLAYER X WINS')
        cleargame();
    }
    else if(seven.innerHTML.includes("X") && eight.innerHTML.includes("X") && nine.innerHTML.includes("X")){
        document.getElementById('10').innerHTML= "Player X Score: " + acc++
        alert('PLAYER X WINS')
        cleargame();
    }
    else if(one.innerHTML.includes("X") && four.innerHTML.includes("X") && seven.innerHTML.includes("X")){
        document.getElementById('10').innerHTML= "Player X Score: " + acc++
        alert('PLAYER X WINS')
        cleargame();
    }
    else if(two.innerHTML.includes("X") && five.innerHTML.includes("X") && eight.innerHTML.includes("X")){
        document.getElementById('10').innerHTML= "Player X Score: " + acc++
        alert('PLAYER X WINS')
        cleargame();
    }
    else if(three.innerHTML.includes("X") && six.innerHTML.includes("X") && nine.innerHTML.includes("X")){
        document.getElementById('10').innerHTML= "Player X Score: " + acc++
        alert('PLAYER X WINS')
        cleargame();
    }
    else if(one.innerHTML.includes("X") && five.innerHTML.includes("X") && nine.innerHTML.includes("X")){
        document.getElementById('10').innerHTML= "Player X Score: " + acc++
        alert('PLAYER X WINS')
        cleargame();
    }
    else if(three.innerHTML.includes("X") && five.innerHTML.includes("X") && seven.innerHTML.includes("X")){
        document.getElementById('10').innerHTML= "Player X Score: " + acc++
        alert('PLAYER X WINS')
        cleargame();
    }
    
}  

function checkWinO(){
    if(one.innerHTML.includes("O") && two.innerHTML.includes("O") && three.innerHTML.includes("O")){
        document.getElementById('11').innerHTML= "Player O Score: " + acc1++
        alert('PLAYER O WINS')
        cleargame();
    }
    else if(four.innerHTML.includes("O") && five.innerHTML.includes("O") && six.innerHTML.includes("O")){
        document.getElementById('11').innerHTML= "Player O Score: " + acc1++
        alert('PLAYER O WINS')
        cleargame();
    }
    else if(seven.innerHTML.includes("O") && eight.innerHTML.includes("O") && nine.innerHTML.includes("O")){
        document.getElementById('11').innerHTML= "Player O Score: " + acc1++
        alert('PLAYER O WINS')
        cleargame();
    }
    else if(one.innerHTML.includes("O") && four.innerHTML.includes("O") && seven.innerHTML.includes("O")){
        document.getElementById('11').innerHTML= "Player O Score: " + acc1++
        alert('PLAYER O WINS')
        cleargame();
    }
    else if(two.innerHTML.includes("O") && five.innerHTML.includes("O") && eight.innerHTML.includes("O")){
        document.getElementById('11').innerHTML= "Player O Score: " + acc1++
        alert('PLAYER O WINS')
        cleargame();
    }
    else if(three.innerHTML.includes("O") && six.innerHTML.includes("O") && nine.innerHTML.includes("O")){
        document.getElementById('11').innerHTML= "Player O Score: " + acc1++
        alert('PLAYER O WINS')
        cleargame();
    }
    else if(one.innerHTML.includes("O") && five.innerHTML.includes("O") && nine.innerHTML.includes("O")){
        document.getElementById('11').innerHTML= "Player O Score: " + acc1++
        alert('PLAYER O WINS')
        cleargame();
    }
    else if(three.innerHTML.includes("O") && five.innerHTML.includes("O") && seven.innerHTML.includes("O")){
        document.getElementById('11').innerHTML= "Player O Score: " + acc1++
        alert('PLAYER O WINS')
        cleargame();
    }
    
}  