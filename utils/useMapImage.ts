import { useMemo } from "react";

export default function useMapImage(props: any) {
    const pageImages = useMemo(() => {
        const obj: { [key: string]: string } = {};
        props?.forEach((img: any) => {
            if (img?.sys?.id && img.url) {
                obj[img?.sys?.id] = img.url;
            }
        })
        return obj;
    }, [props]);
    return pageImages;
}