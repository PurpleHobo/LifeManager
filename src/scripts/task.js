var maiRedir = document.getElementById('goMain');
var goaRedir = document.getElementById("goGoals");
var gamRedir = document.getElementById('goGame');

goaRedir.onclick = function(){
    go("./../html/goals.html");
}

maiRedir.onclick = function(){
    go("./../html/main.html");
}

gamRedir.onclick = function(){
    go("./../html/game.html");
}
