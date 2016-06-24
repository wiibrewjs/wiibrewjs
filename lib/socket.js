/**
 * lib/socket.js - wiibrewjs
 * Copyright (C) 2016 Karim Alibhai.
 */

const net = require( 'net' )
const map = require( 'map-stream' )
const duplex = require( 'duplexer' )

module.exports = host => new Promise((resolve, reject) => {
    let server = net.connect(1024, host, () => {
        // we need to use a dedicated input stream because
        // the wiibrewjs loader expects an 8-byte packet
        // consisting of the size of the incoming data
        // therefore this stream simply prepends the size
        // buffer to the actual data
        let input = map((data, next) => {
            let sizeBuffer = new Buffer(8)
            sizeBuffer.writeDoubleBE(data.length)

            next(null, Buffer.concat([sizeBuffer, data]))
        }), output = map((data, next) => next(null, data))

        // attach each individual stream to the i/o of the
        // server connection
        input.pipe(server)
        server.pipe(output)

        // use duplexer to merge the i/o into a single stream
        // so that the end API is more intuitive
        resolve(duplex( input, output ))
    }).on('error', reject)
})