var mRedir = document.getElementById("goMain");
var tRedir = document.getElementById('goTask');
var gRedir = document.getElementById('goGame');

mRedir.onclick = function(){
    go("./../html/index.html");
}

tRedir.onclick = function(){
    go("./../html/task.html");
}

gRedir.onclick = function(){
    go("./../html/game.html");
}
