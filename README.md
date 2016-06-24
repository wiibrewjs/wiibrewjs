# wiibrewjs

Node.js library for writing wiibrewjs apps.

*Note: First, setup the wiibrewjs loader by following the instructions [here](https://github.com/wiibrewjs/loader).*

## Usage

```javascript
const app = require('wiibrewjs')('ip-address-of-your-wii')

app.on('buttondown', (btn) => {
    console.log('Pressed button: %s', btn)
})
```