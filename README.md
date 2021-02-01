# _that's_ Lit!

_&copy; vladsdamnmemory_
> Please stay tuned for updates! Usually I publish new versions of this package frequently

* `XStickyScroll` has got a smoother scroll behaviour in version 1.1.3

___

DOM is compliant. Build modern user-friendly interfaces easily with Lit:

* Easy to install and use;
* Available as a standalone script;
* Extendable;
* Less code more functionality.

## Contents

* [XStickyScroll](https://jsfiddle.net/91s8ngru/)
* [ViewportWatcher](https://jsfiddle.net/vladsdamnmemory/q7vnaykp/3/)

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

`constructor(host: HTMLElement, scrollBarClass: String);`

* host: HTMLElement (Node to which scrollbar is applied)
* scrollBarClass: String (Style class for the scrollbar)

#### Quick demo

https://jsfiddle.net/91s8ngru/

**Usage**

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

### ViewportWatcher _(@class)_

Tracks the current visible section of document and connects it to the navigation item.

`constructor(nodes: HTMLCollection | NodeList, menuItems: HTMLCollection | NodeList, topOffset?: number, enableClickListeners?: boolean);`

* private readonly nodes;
* private readonly menuItems;
* private readonly setActive;
* private readonly enableClickListeners;
* private readonly topOffset;
* refresh(): void;
* reconstruct(nodes: HTMLCollection | NodeList, menuItems: HTMLCollection | NodeList, topOffset?: number,
  enableClickListeners?: boolean): ViewportWatcher;
* destroy(): void.

Use `.reconstruct()` after changing the DOM, when there are new or removed blocks.

Destroy instance by running the method `.destroy()`.

Make ViewportWatcher instance forcibly recalculate everything with `.refresh()` method.

#### Quick demo

https://jsfiddle.net/vladsdamnmemory/q7vnaykp/3/

**Usage**

Sweet-sweet javascript:

```html
<!-- When using right away in the browser -->
<script>
    let viewportWatcher;
    window.addEventListener("load", function () {
        let nodes, menuItems;
        nodes = document.querySelectorAll(".block"); // Collect all blocks
        menuItems = document.querySelectorAll(".menu-item"); // Collect all menu items

        viewportWatcher = new lit.ViewportWatcher(
                nodes, // Articles, sections, divs or something (any blocks)
                menuItems, // Navigation items
                document.getElementById("nav").getBoundingClientRect().height, // Extra offset if you've got header on a page fixed to the top
                true // Enable click event listeners to scroll into view
        );
    }, false);
</script>
```

ES6 approach and frameworks:

```javascript
import {ViewportWatcher} from "vladsdamnmemory-lit";

/**
 * Assume that we already have some data about the HTML Elements
 */

let viewportWatcher = new ViewportWatcher(
    nodes, // Articles, sections, divs or something (any blocks)
    menuItems, // Navigation items
    document.getElementById("nav").getBoundingClientRect().height, // Extra offset if you've got header on a page fixed to the top
    true // Enable click event listeners to scrol into view
);
```

___
_Thank you for using my code!_

_For inquiries, proposals and bug reports email me to vladsdamnmemory@outlook.com_
