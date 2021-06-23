//Main
//By Chase Trybula
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {  //creates electron window
    const win = new BrowserWindow({
        darkTheme: true,
        webPreferences: {
            preload: path.join(__dirname, 'prereq.js'),
            enableRemoteModule: true
        }
    });
    
    win.maximize();
    win.loadFile('src/html/index.html');  //loads index at startup
}

app.whenReady().then (() => {
    createWindow();
});

app.on('window-all-closed', function () {  //closes main when electon is closed
    console.log("All Windows Closed\nGoodbye");
    if (process.platform !== 'darwin') app.quit();
});
