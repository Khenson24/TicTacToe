var players=[];
var markers=["X", "O"];
players[0]="Player1";
players[1]="Player2";
var whoseTurn=0;

var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var cells = document.querySelectorAll('.cell');

function play(cells){
    cells.innerHTML= markers[whoseTurn];
    togglePlayer();
}

function togglePlayer(){
    if (whoseTurn == 0){
        return whoseTurn = 1
    }
    else{
        whoseTurn=0
    }
   
}
function checkWin(){
    for(arr=0;i<wins.length;arr++){
        for(j=0;j<wins[i].length;j++){
            wins[i][j]
        }
    }
}  

function cleargame(){
    var i;
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML=" "
  }
}