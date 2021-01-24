export declare class ViewportWatcher {
    private readonly nodes;
    private readonly menuItems;
    private readonly setActive;
    private readonly scrollIntoView;
    private readonly enableClickListeners;
    private readonly topOffset;
    private static classList;
    constructor(nodes: HTMLCollection | NodeList, menuItems: HTMLCollection | NodeList, topOffset?: number, enableClickListeners?: boolean);
    refresh(): void;
    reconstruct(nodes: HTMLCollection | NodeList, menuItems: HTMLCollection | NodeList, topOffset?: number, enableClickListeners?: boolean): ViewportWatcher;
    destroy(): void;
}
