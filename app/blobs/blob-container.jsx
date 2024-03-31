'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import blobshape from 'blobshape';

function createBlob(props) {
    const { path: svgPath, seedValue: seed } = blobshape({ ...props, edges: 6, growth: 6, size: 512 });
    return { svgPath, seed };
}

export function BlobContainer() {
    const [seed, setSeed] = useState(null);
    const [svgPath, setSvgPath] = useState('');
    const router = useRouter();

    useEffect(() => {
        let blob;
        const url = new URL(window.location.href);
        const currentSeed = url.searchParams.get('seed');
        if (currentSeed) {
            blob = createBlob({ seed: parseInt(currentSeed) });
        } else {
            blob = createBlob({ seed: null });
            url.searchParams.set('seed', blob.seed.toString());
            router.push(url.toString());
        }
        setSeed(blob.seed);
        setSvgPath(blob.svgPath);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center w-full gap-8 sm:flex-row">
            <div className="w-full bg-white text-primary card aspect-square sm:flex-1">
                {svgPath ? (
                    <svg
                        viewBox={`0 0 512 512`}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                    >
                        <path id="blob" d={svgPath} fill="currentColor" />
                    </svg>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                )}
            </div>
            <div className="flex justify-center teims-center sm:flex-1">
                <button
                    className="btn btn-lg btn-primary sm:btn-wide"
                    onClick={() => {
                        const url = new URL(window.location.href);
                        const randomBlob = createBlob({ seed: null });
                        setSeed(randomBlob.seed);
                        setSvgPath(randomBlob.svgPath);
                        url.searchParams.set('seed', randomBlob.seed.toString());
                        router.push(url.toString());
                    }}
                >
                    Change blob
                </button>
            </div>
        </div>
    );
}
