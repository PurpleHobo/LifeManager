//base holds general funcs redirects too other pages 
//
var go = function (redir){
    location.href = redir;
}

//loads vars after DOM content to avoid globals
document.addEventListener('DOMContentLoaded', function() {
    var goalRedir = document.getElementById("goGoals");
    var mainRedir = document.getElementById("goMain");
    var taskRedir = document.getElementById('goTask');
    var gameRedir = document.getElementById('goGame');

    if (mainRedir != null) {
        mainRedir.onclick = function(){
            go("./../html/index.html");
        }
    }

    if (goalRedir != null) {
        goalRedir.onclick = function(){
            go("./../html/goals.html");
        }
    }

    if (taskRedir != null) {
        taskRedir.onclick = function(){
            go("./../html/task.html");
        }
    }

    if (gameRedir != null) {
        gameRedir.onclick = function(){
            go("./../html/game.html");
        }
    }
});
