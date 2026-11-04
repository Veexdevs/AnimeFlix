const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
app.whenReady().then(() => { const win = new BrowserWindow({width:1440,height:900,backgroundColor:'#10100e',webPreferences:{contextIsolation:true,nodeIntegration:false}}); win.loadFile(path.join(__dirname,'dist/index.html')); win.webContents.setWindowOpenHandler(({url}) => { if (/^https:\/\//.test(url)) shell.openExternal(url); return {action:'deny'}; }); });
app.on('window-all-closed',()=>{ if(process.platform !== 'darwin') app.quit(); });
