# grapesjs-ja

[DEMO](https://codepen.io/guppi-tw/pen/mdovdmx)

### HTML

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-ja"></script>

<div id="gjs"></div>
```

### JS

```js
const editor = grapesjs.init({
  container: "#gjs",
  height: "100%",
  fromElement: true,
  storageManager: false,
  plugins: ["grapesjs-ja"],
});
```

### CSS

```css
body,
html {
  margin: 0;
  height: 100%;
}
```

## Summary

- Plugin name: `grapesjs-ja`
<!-- - Components
  - `component-id-1`
  - `component-id-2`
  - ...
- Blocks
  - `block-id-1`
  - `block-id-2`
  - ... -->
  <!--

## Options

| Option    | Description        | Default         |
| --------- | ------------------ | --------------- | --- |
| `option1` | Description option | `default value` | --> |

## Download

- CDN
  - `https://unpkg.com/grapesjs-ja`
- NPM
  - `npm i grapesjs-ja`
- GIT
  - `git clone https://github.com/guppi65513461/grapesjs-ja.git`

## Usage

Directly in the browser

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-ja.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    container: "#gjs",
    // ...
    plugins: ["grapesjs-ja"],
    pluginsOpts: {
      "grapesjs-ja": {
        /* options */
      },
    },
  });
</script>
```

Modern javascript

```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-ja';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/guppi65513461/grapesjs-ja.git
$ cd grapesjs-ja
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```

## License

MIT
