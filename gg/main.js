const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const pug = require('electron-pug')({pretty: true});
const express = require('express');

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 350, height: 550, resizable:false, frame:false})
  mainWindow.loadURL(`file://${__dirname}/src/views/index.pug`)
  //mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
