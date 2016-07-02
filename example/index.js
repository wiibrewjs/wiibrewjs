'use strict';

const app = require('../')()

app.init('192.168.1.118').then(() => {
    app.print('Hello, world.')

    // ...
    const background = app.image('bg', 'img/background.png')

    app.load(background).then(() => {
        // ...
    })
}, console.log)