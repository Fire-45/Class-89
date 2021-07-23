var player_1 = localStorage.getItem("saveUsername1");
var player_2 = localStorage.getItem("saveUsername2");
var question_player = player_1;
var answer_player = player_2;
var P1_score = 0;
var P2_score = 0;
document.getElementById("Player1").innerHTML = player_1 + ":  ";
document.getElementById("Player2").innerHTML = player_2;
document.getElementById("player1_score").innerHTML = P1_score;
document.getElementById("player2_score").innerHTML = P2_score;

document.getElementById("question_player").innerHTML = question_player;
document.getElementById("answer_player").innerHTML = answer_player;

function SEND(){
    get_word = document.getElementById("main_input").value;
    
}
