import { useLayoutEffect, useRef } from "react";
import { BackgroundImageProps } from "../../utils/types";

export default function BackgroundImage(props: BackgroundImageProps) {
    const { children, url, className } = props;
    const divRef = useRef(null);

    return <div className={className[0]}
        style={{
            backgroundImage: `url('${url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
    >
        <div className={className[1]}>
            {children}
        </div>
    </div>
}