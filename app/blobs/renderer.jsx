import { fixedSize } from './generator';
import { randomInt } from 'utils';

// See: https://github.com/lokesh-coder/blobs.app/blob/master/src/components/Blob.js
export function ShapeRenderer(props) {
    const { svgPath, colors } = props;
    const uniqueGradientId = `gradient-${randomInt(10_000_000, 100_000_000)}` 
    return (
        <div className="w-full bg-white text-primary aspect-square">
            {!!svgPath && !!colors && (
            <svg
                viewBox={`0 0 ${fixedSize} ${fixedSize}`}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
            >
                <>
                    <defs>
                        <linearGradient id={uniqueGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: colors[0] }} />
                            <stop offset="100%" style={{ stopColor: colors[1] }} />
                        </linearGradient>
                    </defs>
                    <path id="blob" d={svgPath} fill={`url(#${uniqueGradientId})`} />
                </>
            </svg>)}
        </div>
    );
}
