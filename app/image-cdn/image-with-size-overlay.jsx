'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getResourceSize } from '../../utils';

export function ImageWithSizeOverlay({ src, width, height, overlayPosition, isNextImage }) {
    const imageRef = useRef();
    const [imgSize, setImgSize] = useState(undefined);

    const handleImageLoad = useCallback(() => {
        const imgElement = imageRef.current;
        if (imgElement?.complete) {
            const size = getResourceSize(imgElement?.currentSrc);
            setImgSize(size);
        } else {
            setImgSize(undefined);
        }
    }, []);

    useEffect(() => {
        handleImageLoad();
    }, [handleImageLoad]);

    return (
        <div className="relative">
            {imgSize && (
                <span
                    className={`absolute py-1.5 px-2.5 text-sm rounded-xl bg-neutral-900/70 top-2.5 ${overlayPosition === 'right' ? 'right-2.5' : 'left-2.5'}`}
                >{`Size: ${Math.ceil(imgSize / 1024)}KB`}</span>
            )}
            {isNextImage ? (
                <Image src={src} width={width} height={height} alt="Corgi" onLoad={handleImageLoad} ref={imageRef} />
            ) : (
                <img src={src} width={width} height={height} alt="Corgi" onLoad={handleImageLoad} ref={imageRef} />
            )}
        </div>
    );
}
