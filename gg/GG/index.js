/*
 *
 *  Author: electron community
 *  Modified by: Daniel 'Frisk' Garcia
 *  Doc:  https://github.com/kty
 *  DocA: https://gitlab.com/kty
 *
 */

const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({width:800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})
