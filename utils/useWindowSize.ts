import { useEffect, useState } from "react";

export default function useWindowSize() {
    const hasWindow = typeof window !== "undefined"

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null
        const height = hasWindow ? window.innerHeight : null
        return {
            width,
            height,
        }
    }
    const [windowSize, setWindowSize] = useState(getWindowDimensions);

    function handleResize() {
        setWindowSize(getWindowDimensions())
    }
    useEffect(() => {
        if (hasWindow) {
            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
        }
    }, [hasWindow])

    return windowSize
}