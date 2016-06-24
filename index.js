/**
 * index.js - wiibrewjs
 * Copyright (C) 2016 Karim Alibhai.
 */

const createSocket = require('./lib/socket')
const EventEmitter = require('events').EventEmitter

module.exports = ip => {
    let socket = createSocket(ip)
    let app = new EventEmitter()

    // TODO: write events API between loader and library

    return app
}