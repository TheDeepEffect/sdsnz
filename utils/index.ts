import { ImageLoaderProps } from "next/image"
import { ContenWithBgImageContentLinks } from "../lib/schema";

export const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`
}


function renderOptions(links: ContenWithBgImageContentLinks) {
    // create an asset map
    const assetMap = new Map();
    // loop through the assets and add them to the map
    for (const asset of links.assets.block) {
        assetMap.set(asset?.sys?.id, asset);
    }
}