export interface NavItem {
    text: string;
    url: string;
}

export interface Figure {
    image: string;
    caption: string;
}

export interface GalleryItem {
    url: string;
    thumbnailUrl: string;
    largeUrl: string;
    smallUrl: string;
    tshirtUrl: string;
    postcardUrl: string;
    title: string;
    year: string;
    artist: string;
    body: string;
    figures: Figure[];
    sourceText: string;
    index: number;
    draft: boolean;
}