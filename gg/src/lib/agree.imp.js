const {dialog} = require('electron')
console.log(dialog.showOpenDialog({properties: ['openFile'. 'openDirectory', 'multiSelections']}))
