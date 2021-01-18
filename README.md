# _that's_ Lit!

_&copy; vladsdamnmemory_

DOM is compliant. Build modern user-friendly interfaces easily with Lit:

* Easy to install and use;
* Available as a standalone script;
* Extendable;
* Less code more functionality.

# _`contents`_:

* [XStickyScroll](https://jsfiddle.net/91s8ngru/)

## Installation

### _unpkg_

Lit is available for direct browser usage. To implement this you should add the following script import in the `head`
tag of your html document.

```html
<!-- Browser content -->
<head>
    <title>that's Lit!</title>
    <!-- ... -->
    <script src="https://unpkg.com/vladsdamnmemory-lit@latest/lit/browser/index.js"></script>
    <!-- ... -->
</head>
```

### _npm_

Run the following in a terminal inside your project root like so:

```text
npm i vladsdamnmemory-lit --save-prod
```

Import the required class:

```javascript
import {XStickyScroll} from "vladsdamnmemory-lit";
```

## Documentation

### XStickyScroll _(@class)_

Eliminates the need for a vertical scroll in a block. Useful for a log or code reading. It adds a scrollbar to a
provided element.

* @param host: HTMLElement - Node to which scrollbar is applied
* @param scrollBarClass?: String - Style class for the scrollbar

#### Quick demo

https://jsfiddle.net/91s8ngru/

#### Usage

First specify the available width for the block. Sometimes it's optional, depends on your layout.

```html
<!-- html snippet -->

<div id="log" style="width: 500px">lorem ipsum... plus many many lines</div>
```

Next step is to add some code:

```javascript
import {XStickyScroll} from "vladsdamnmemory-lit";

let scrollManager = new XStickyScroll(document.getElementById("log"), "scrollbar-style-class");

// It's available not to compile source code
// If you want to create an instance of XStickyScroll ASAP,  
// check out the browser folder inside
// This library is already compiled to older ES version for more compatibility with all browsers

// Browser usage

let scrollManager = new lit.XStickyScroll(document.getElementById("log"), "scrollbar-style-class");

// Unbinds event listeners and removes extra objects
scrollManager.destroy(); // Call it on framework hooks onDestroy/beforeDestroy etc.
```

___
_Thank you for using my code!_

_For inquiries, proposals and bug reports email me to vladsdamnmemory@outlook.com_