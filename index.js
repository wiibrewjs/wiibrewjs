/**
 * index.js - wiibrewjs
 * Copyright (C) 2016 Karim Alibhai.
 */

const createSocket = require('./lib/socket')
const METHODS = (function (methods) {
    let tmp

    for (let method in methods) {
        if (methods.hasOwnProperty(method)) {
            tmp = new Buffer(4)
            tmp.writeInt32BE(methods[method])
            methods[method] = tmp
        }
    }

    return methods
}({
    print: 0x01
}))

const util = require('util')
const EventEmitter = require('events').EventEmitter

class App extends EventEmitter {
    constructor () {
        super()

        this.socket = null
    }

    init ( ip ) {
        return new Promise((resolve, reject) => createSocket(ip).then(socket => {
            this.socket = socket
            resolve() 
        }, reject))
    }

    load ( assets ) {
        // force array
        if (!Array.isArray( assets )) {
            assets = [assets]
        }

        return new Promise((resolve, reject) => {
            // ...
        })
    }

    print () {
        const text = util.format.apply(util, arguments)
        const size = new Buffer(4)
        size.writeInt32BE(text.length)

        this.socket.write(METHODS.print)
        this.socket.write(size)
        this.socket.write(new Buffer(text))
    }
}

module.exports = () => new App()
