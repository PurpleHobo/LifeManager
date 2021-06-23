var goalRedir = document.getElementById("goGoals");
var taskRedir = document.getElementById('goTask');
var gameRedir = document.getElementById('goGame');

goalRedir.onclick = function(){
    go("./../html/goals.html");
}

mainRedir.onclick = function(){
    go("./../html/main.html");
}

taskRedir.onclick = function(){
    go("./../html/task.html");
}

gameRedir.onclick = function(){
    go("./../html/game.html");
}
