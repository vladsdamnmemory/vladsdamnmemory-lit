export class XStickyScroll {
    host: HTMLElement;
    scrollBarClass?: String;

    scrollView: HTMLElement | undefined;
    scrollbar: HTMLElement | undefined;
    fakeContent: HTMLElement | undefined;

    onViewScroll: EventListener | undefined;
    onScroll: Function | EventListener | undefined;
    onResize: Function | EventListener | undefined;

    // @ts-ignore
    public static topOffset(e: HTMLElement): number {
        return e.getBoundingClientRect().top + pageYOffset;
    }

    // @ts-ignore
    public static bottomOffset(e: HTMLElement): number {
        return e.getBoundingClientRect().bottom + pageYOffset;
    }

    // @ts-ignore
    public static insertNodeAfter(newNode: HTMLElement, referenceNode: HTMLElement): void {
        if (referenceNode.parentNode) referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    // @ts-ignore
    public static updateScroll(source: HTMLElement, target: HTMLElement): number {
        return target.scrollLeft = source.scrollLeft;
    }

    // @ts-ignore
    constructor(host: HTMLElement, scrollBarClass: String) {
        this.host = host;
        this.scrollBarClass = scrollBarClass;
        this.init();
    }

    // @ts-ignore
    private init() {
        // @ts-ignore
        this.onResize = () => {
            this.fitScrollBar();
            this.controlWithinArea();
        };
        // @ts-ignore
        this.onScroll = () => {
            this.controlWithinArea();
            this.fitScrollBar(); // sometimes optional. Needed when DIV is not displayed yet
        };
        // @ts-ignore
        window.addEventListener("scroll", this.onScroll, false);
        // @ts-ignore
        window.addEventListener("resize", this.onResize, false);
        // @ts-ignore
        this.onViewScroll = ev => {
            ev.target === this.scrollView ?
                XStickyScroll.updateScroll(this.scrollView, <HTMLElement>this.scrollbar)
                : XStickyScroll.updateScroll(<HTMLElement>this.scrollbar, <HTMLElement>this.scrollView);
        };
        // console.log(this.host);
        // this.scrollView = this.selector ? this.host.querySelector(this.selector) : this.host;
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
        // @ts-ignore
        this.onResize();
    }

    // May scrollbar stay inside the view only
    // @ts-ignore
    private controlWithinArea(): void {
        let fakeScrollbarTopOffset: number;
        let fakeScrollbarBottomOffset: number;
        let viewTopOffset: number;
        let viewBottomOffset: number;
        let scrollBarWidth: number = 0;

        if (this.scrollView) {
            scrollBarWidth = this.scrollView.offsetHeight - this.scrollView.clientHeight;
        }

        fakeScrollbarTopOffset = XStickyScroll.topOffset(<HTMLElement>this.scrollbar);
        fakeScrollbarBottomOffset = XStickyScroll.bottomOffset(<HTMLElement>this.scrollbar);
        viewTopOffset = XStickyScroll.topOffset(<HTMLElement>this.scrollView);
        viewBottomOffset = XStickyScroll.bottomOffset(<HTMLElement>this.scrollView);

        console.log();
        console.log();
        console.log();
        console.log("fakeScrollbarTopOffset=" + fakeScrollbarTopOffset, "viewTopOffset=" + viewTopOffset);
        console.log();
        console.log("fakeScrollbarBottomOffset=" + fakeScrollbarBottomOffset, "viewBottomOffset=" + viewBottomOffset);
        console.log();
        console.log("scrollBarWidth:", scrollBarWidth);

        // && fakeScrollbarBottomOffset < viewBottomOffset
        if ((fakeScrollbarTopOffset - scrollBarWidth > viewTopOffset) && fakeScrollbarBottomOffset < viewBottomOffset) {
            // @ts-ignore
            this.scrollbar.style.left = '';
        } else {
            // @ts-ignore
            this.scrollbar.style.left = '-9999999px';
        }
    }

    // @ts-ignore
    private fitScrollBar(): void {
        if (this.fakeContent && this.scrollbar && this.scrollView) {
            this.fakeContent.style.width = this.scrollView.scrollWidth + 'px';
            this.scrollbar.style.width = this.scrollView.offsetWidth + 'px';
        }
    }

    // @ts-ignore
    public destroy() {
        // Kill DOM elements
        if (this.fakeContent && this.scrollbar && this.scrollView) {

            console.log("Killing DOM elements...");
            try {
                // @ts-ignore
                this.scrollView.removeEventListener('scroll', this.onViewScroll);
                // @ts-ignore
                this.scrollbar.removeEventListener('scroll', this.onViewScroll);
                // @ts-ignore
                window.removeEventListener("scroll", this.onScroll);
                // @ts-ignore
                window.removeEventListener("resize", this.onResize);
                this.scrollView.style.overflowY = '';
                this.scrollView.style.whiteSpace = '';
                this.scrollbar.remove();
                this.fakeContent.remove();
                delete this.scrollbar;
                delete this.fakeContent;
                console.log("Have killed DOM elements...");
            } catch (err) {
                console.error(err);
            }

        }
    }
}
