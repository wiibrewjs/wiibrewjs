'use strict';

const app = require('../')()

console.log('* Connecting ...')
app.init('192.168.1.118').then(() => {
  console.log('* Established connection.')
  app.print('Hello, world.')
  app.load([
    app.img('bg', 'img/bg.png')
  ]).then(() => {
    // ...
  }, console.log)
}, console.log)
