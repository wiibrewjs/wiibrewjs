'use strict';

const app = require('../')()

app.init('192.168.1.118').then(() => {
  app.print('Hello, world.')
  app.load([
    app.img('bg', 'img/bg.png')
  ]).then(() => {
    // ...
  }, console.log)
}, console.log)
