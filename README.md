# _that's_ Lit!

Build modern user friendly interfaces easy with Lit.

### XStickyScroll _(class)_

This class eliminates the need for vertical scroll in a block. Useful for log or code reading. It adds a scroll to a
provided element by yourself.

#### Usage

```javascript
import {XStickyScroll} from "lit";

let scrollManager = new XStickyScroll(document.getElementById("log"), "scrollbar-class");

// It's available not to compile source code
// If you want to create an instance of XStickyScroll ASAP,  
// check out the browser folder inside
// This library is already compiled to older ES version for more compatibility with all browsers

// Browser usage

let scrollManager = new lit.XStickyScroll(document.getElementById("log"), "scrollbar-class");

// Unbinds event listeners and removes extra objects
scrollManager.destroy(); // Call it on framework hooks onDestroy/beforeDestroy etc.
```