let game = [];
let board = [];
let whoPlays = 0; // 0 = player   1 = pc
let verify;
let playing = true;
let level = 1;
let pcMove = 1;
let whoStarts = 1;
 
function play(p) {
  if(playing && whoPlays == 0) {
    switch (p) {
      case 1:
        if(game[0],[0] == ""){
          game[0],[0] = "x";
          whoPlays = 1;
        }
      break;
    
      case 2:
        if(game[0],[1] == ""){
          game[0],[1] = "x";
          whoPlays = 1;
        }
      break;
      
      case 3:
        if(game[0],[2] == ""){
          game[0],[2] = "x";
          whoPlays = 1;
        }
      break;
    
      case 4:
        if(game[1],[0] == ""){
          game[1],[0] = "x";
          whoPlays = 1;
        }
      break;

      case 5:
        if(game[1],[1] == ""){
          game[1],[1] = "x";
          whoPlays = 1;
        }
      break;
    
      case 6:
        if(game[1],[2] == ""){
          game[1],[2] = "x";
          whoPlays = 1;
        }
      break;

      case 7:
        if(game[2],[0] == ""){
          game[2],[0] = "x";
          whoPlays = 1;
        }
      break;

      case 8:
        if(game[2],[1] == ""){
          game[2],[1] = "x";
          whoPlays = 1;
        }
      break;
    
      default:
        if(game[2],[2] == ""){
          game[2],[2] = "x";
          whoPlays = 1;
        }
      break;
    }
    updateBoard();
  }
}

function updateBoard() {
  for(let l = 0; l < 3; l++){
    for(let c = 0; c < 3; c++){
      if(game[l][c]=="x"){
        board[l][c].innerHTML = "x";
        board[l][c].style.cursor = "defaut";
      }else if(game[l][c]=="o"){
        board[l][c].innerHTML = "o";
        board[l][c].style.cursor = "defaut";
      }else{
        board[l][c].innerHTML = "";
        board[l][c].style.cursor = "pointer";
      }
    }
  }
}

function start() {
  playing = true;
  pcMove = 1;
  game = [
         ["","",""],
         ["","",""],
         ["","",""]
  ];

  board = [
    [document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
    [document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
    [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]
  ];
}

window.addEventListener("load", start);