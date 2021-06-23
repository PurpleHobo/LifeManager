var maRedir = document.getElementById('goMain');
var goRedir = document.getElementById("goGoals");
var taRedir = document.getElementById('goTask');

goRedir.onclick = function(){
    go("./../html/goals.html");
}

maRedir.onclick = function(){
    go("./../html/main.html");
}

taRedir.onclick = function(){
    go("./../html/task.html");
}

gaRedir.onclick = function(){
    go("./../html/game.html");
}
