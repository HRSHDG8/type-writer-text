# type-writer-text

> lightweight spinner library

[![NPM](https://img.shields.io/npm/v/type-writer-text.svg)](https://www.npmjs.com/package/type-writer-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save type-writer-text
```

# Usage

## Basic
```tsx
import * as React from 'react'

import { TypeWriterText } from 'type-writer-text'

class App extends React.Component {
  render () {
    return (
      <TypeWriterText text={"Happy Quarantine"} />
    )
  }
}
```
## Passing Props
<h3>The component takes in following props</h3>
<u>Text</u> :
<ul>
<li> Mandatory paramter, to render the string you want
</ul>

<u>Animation Speed</u> :
<ul>
<li> Optional paramter, to provide the speed to text rendering, defaults to 100
</ul>

<u>Cursor Props</u> :
<ul>
<li> Optional paramter, to provide color and blink-speed to cursor
<li> Should be passed in as an object, eg. {color:'grey', blinkSpeed: '1s'}, defaults to rgba(0,0,0,0.87) for color and '0.8s' for blinkSpeed
</ul>
<u>Show Cursor</u> :
<ul>
<li> Optional paramter, to show/hide cursor, defaults to true
</ul>

```tsx
import * as React from 'react'

import { TypeWriterText } from 'type-writer-text'

class App extends React.Component {
  render () {
    return (
      <TypeWriterText text={"Happy Quarantine"} animationSpeed = {100} cursorProps = {{ color: 'rgba(0,0,0,0.87)', blinkSpeed: '0.8s' }} showCursor = {true} />
    )
  }
}
```

## License

MIT © [HRSHDG8](https://github.com/HRSHDG8)