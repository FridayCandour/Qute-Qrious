declare const Ready: () => Promise<unknown>;
declare const QuteQRious: {
    load(): Promise<void>;
    create(config: {
        canvas: HTMLCanvasElement;
        bgColor?: string;
        text: string;
        Color?: string;
        image?: string;
    }): void;
};
