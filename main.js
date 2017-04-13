const fs = require('fs');
const {app,BrowserWindow} = require('electron')
let mainWin ;
// app的进程ok的时候
app.on('ready',()=>{
    mainWin = new BrowserWindow({
        height: 600,
        width: 800
    });
    // 初始化窗体
    if(fs.existsSync('file://'+__dirname+'/dist/index.js')){
        mainWin.loadURL('file://'+__dirname+'/dist/index.html');
    }else{
         mainWin.loadURL('http://localhost:8000/');
    }
    
});