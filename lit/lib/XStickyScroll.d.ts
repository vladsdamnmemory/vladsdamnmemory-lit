export declare class XStickyScroll {
    host: HTMLElement;
    scrollBarClass?: String;
    scrollView: HTMLElement | undefined;
    scrollbar: HTMLElement | undefined;
    fakeContent: HTMLElement | undefined;
    onViewScroll: EventListener | undefined;
    onScroll: Function | EventListener | undefined;
    onResize: Function | EventListener | undefined;
    static topOffset(e: HTMLElement): number;
    static bottomOffset(e: HTMLElement): number;
    static insertNodeAfter(newNode: HTMLElement, referenceNode: HTMLElement): void;
    static updateScroll(source: HTMLElement, target: HTMLElement): number;
    constructor(host: HTMLElement, scrollBarClass: String);
    private init;
    private controlWithinArea;
    private fitScrollBar;
    destroy(): void;
}
