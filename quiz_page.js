player1_name=localStorage.getItem("player1name")
console.log("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
player2_name=localStorage.getItem("player2name")
player1_score=0
player2_score=0
answerturn="player2"
questionturn="player1"
document.getElementById("1_name").innerHTML=player1_name+":"
document.getElementById("2_name").innerHTML=player2_name+":"
document.getElementById("player1score").innerHTML=player1_score
document.getElementById("player2score").innerHTML=player2_score

document.getElementById("player_question").innerHTML="question-Turn "+player1_name
document.getElementById("player_answer").innerHTML="answer-Turn "+player2_name
function send(){
    number1=document.getElementById("numb3r1").value
    number2=document.getElementById("numb3r2").value
    
    actual_answer= parseInt(number1)*parseInt(number2)
    question="<h4>" + number1 + " X "+number2+"</h4>"
    input_box="<br>Answer : <input type='text' id='input_check_box'>"
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row= question+input_box+check_button
    document.getElementById("output").innerHTML = row;
    document.getElementById("numb3r1").value = "";
    document.getElementById("numb3r2").value = "";
    

}
question_turn="player1"
answer_turn="player2"
function check(){
    answer= document.getElementById("input_check_box").value
    if (answer == actual_answer){
        if(answer_turn=="player1"){
            player1_score+=1
            document.getElementById("player1score").innerHTML=player1_score
        }
        else{
            player2_score+=1
            document.getElementById("player2score").innerHTML=player2_score
        }
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="question turn"+player2_name
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn"+player1_name
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer turn"+player2_name
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer turn"+player1_name
    }
    document.getElementById("output").innerHTML=""
}