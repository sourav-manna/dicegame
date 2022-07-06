var target=30;
var p1=0;
var p2=0;
var count=1;
var flag = 0;
function rolldice()
{
    if(flag == 1){
        document.getElementById("b1").value = "Roll the Dice";
        document.getElementById("s1").value = 0
        document.getElementById("s2").value = 0
        document.getElementById("score").value = 0;
        document.getElementById("p1").innerHTML = 'Target 30'
        p1=0;
        p2=0;
        count=1;
        flag = 0;
    }
    else{
    if(count%2== 1)
    {
        var player1 = (Math.floor(Math.random() * 10)%6)+1 ;
        document.getElementById("score").value = player1;
        p1 += player1;
        document.getElementById("s1").value = p1;
    }
    else
        {
        var player2 = (Math.floor(Math.random() * 10)%6)+1 ;
        document.getElementById("score").value = player2;
        p2 += player2;
        document.getElementById("s2").value = p2;
        }
    count++;
    if(p1 >= target)
        {
        document.getElementById("p1").innerHTML = "🎉Player 1 won the match";
        document.getElementById("b1").value = "Play Again";
        flag = 1;
        }
    else if(p2 >= target)
        {
        document.getElementById("p1").innerHTML = "🎉Player 2 won the match";
        document.getElementById("b1").value = "Play Again";
        flag = 1;
    
        }}
}