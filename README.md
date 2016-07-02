# wiibrewjs

Node.js library for writing wiibrewjs apps.

*Note: First, setup the wiibrewjs loader by following the instructions [here](https://github.com/wiibrewjs/loader).*

## Usage

```javascript
const app = require('wiibrewjs')()

app.init('ip-address-of-your-wii').then(() => {
    // ...
})
```