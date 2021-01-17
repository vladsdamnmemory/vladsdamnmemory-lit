export class XStickyScroll {
    constructor(host, scrollBarClass) {
        this.host = host;
        this.scrollBarClass = scrollBarClass;
        this.init();
    }
    static topOffset(e) {
        return e.getBoundingClientRect().top + pageYOffset;
    }
    static bottomOffset(e) {
        return e.getBoundingClientRect().bottom + pageYOffset;
    }
    static insertNodeAfter(newNode, referenceNode) {
        if (referenceNode.parentNode)
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    static updateScroll(source, target) {
        return target.scrollLeft = source.scrollLeft;
    }
    init() {
        this.onResize = () => {
            this.fitScrollBar();
            this.controlWithinArea();
        };
        this.onScroll = () => {
            this.controlWithinArea();
            this.fitScrollBar();
        };
        window.addEventListener("scroll", this.onScroll, false);
        window.addEventListener("resize", this.onResize, false);
        this.onViewScroll = ev => {
            ev.target === this.scrollView ?
                XStickyScroll.updateScroll(this.scrollView, this.scrollbar)
                : XStickyScroll.updateScroll(this.scrollbar, this.scrollView);
        };
        this.scrollView = this.host;
        this.scrollView.style.overflowY = 'hidden';
        this.scrollView.style.whiteSpace = 'pre';
        this.scrollbar = document.createElement("div");
        this.scrollbar.className = 'sticky-scrollbar ' + this.scrollBarClass;
        this.scrollbar.style.overflowX = 'auto';
        this.scrollbar.style.position = 'fixed';
        this.scrollbar.style.bottom = '0';
        this.scrollbar.style.zIndex = '999';
        this.fakeContent = document.createElement("div");
        this.scrollbar.appendChild(this.fakeContent);
        this.fakeContent.className = 'fake-content';
        this.fakeContent.style.height = '1px';
        XStickyScroll.insertNodeAfter(this.scrollbar, this.scrollView);
        this.scrollView.addEventListener('scroll', this.onViewScroll);
        this.scrollbar.addEventListener('scroll', this.onViewScroll);
        this.onResize();
    }
    controlWithinArea() {
        let fakeScrollbarTopOffset;
        let fakeScrollbarBottomOffset;
        let viewTopOffset;
        let viewBottomOffset;
        fakeScrollbarTopOffset = XStickyScroll.topOffset(this.scrollbar);
        fakeScrollbarBottomOffset = XStickyScroll.bottomOffset(this.scrollbar);
        viewTopOffset = XStickyScroll.topOffset(this.scrollView);
        viewBottomOffset = XStickyScroll.bottomOffset(this.scrollView);
        console.log("fakeScrollbarTopOffset=" + fakeScrollbarTopOffset, "viewTopOffset=" + viewTopOffset);
        console.log("fakeScrollbarBottomOffset=" + fakeScrollbarBottomOffset, "viewBottomOffset=" + viewBottomOffset);
        if (fakeScrollbarTopOffset > viewTopOffset && fakeScrollbarBottomOffset < viewBottomOffset) {
            this.scrollbar.style.display = '';
        }
        else {
            this.scrollbar.style.display = 'none';
        }
    }
    fitScrollBar() {
        if (this.fakeContent && this.scrollbar && this.scrollView) {
            this.fakeContent.style.width = this.scrollView.scrollWidth + 'px';
            this.scrollbar.style.width = this.scrollView.offsetWidth + 'px';
        }
    }
    destroy() {
        if (this.fakeContent && this.scrollbar && this.scrollView) {
            console.log("Killing DOM elements...");
            try {
                this.scrollView.removeEventListener('scroll', this.onViewScroll);
                this.scrollbar.removeEventListener('scroll', this.onViewScroll);
                window.removeEventListener("scroll", this.onScroll);
                window.removeEventListener("resize", this.onResize);
                this.scrollView.style.overflowY = '';
                this.scrollView.style.whiteSpace = '';
                this.scrollbar.remove();
                this.fakeContent.remove();
                delete this.scrollbar;
                delete this.fakeContent;
                console.log("Have killed DOM elements...");
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}
//# sourceMappingURL=XStickyScroll.js.map