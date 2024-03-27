import { Alert } from '../../components/alert';
import { getNetlifyContext } from '../../utils';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { CodeBlock } from '../../components/code-block';

export const metadata = {
    title: 'Image CDN'
};

const nextImageSnippet = `
import Image from 'next/image';

// In your component
<Image src="images/corgi.jpg" width="2400" height="1600" alt="Corgi" />
`;

const originalVsCdnSnippet = `
// <== On the left, the original image
<img src="/images/corgi.jpg" width="2400" height="1600" alt="Corgi" />

// ==> On the right, explicitly using the Image CDN endpoint
<img src="/.netlify/images?url=images/corgi.jpg" width="2400" height="1600" alt="Corgi" />
`;

export default function Page() {
    const ctx = getNetlifyContext();
    return (
        <div className="flex flex-col gap-16 sm:gap-24">
            <section>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Image CDN</h1>
            </section>
            {!ctx && (
                <Alert>
                    <p>
                        Note: for this page to work properly, either run this starter locally via <code>netlify dev</code>, or deploy to Nelify.
                    </p>
                </Alert>
            )}
            {ctx === 'dev' && (
                <Alert>
                    <p>
                        Note: in local development, the Image CDN is mocked through the IPX package, and no auto-format detection is performed. Try this on a site
                        deployed to Netlify!
                    </p>
                </Alert>
            )}

            <section>
                <h2 className="mb-4 text-2xl">Using next/image component</h2>
                <h2 className="mb-6">
                    On Netlify, the <code>next/image</code> component is automatically configured to uses our Image CDN and serve optimized images.
                </h2>
                <CodeBlock lang="jsx">{nextImageSnippet}</CodeBlock>
                <div className="overflow-hidden border-2 border-white rounded-2xl">
                    <ImageWithSizeOverlay src="/images/corgi.jpg" width={2400} height={1600} isNextImage={true} />
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-2xl">Original vs. optimized image: can you tell the difference?</h2>
                <h2 className="mb-6">
                    This example shows the original image (on the left) vs. the optimized image (on the right), using regular <code>{'<img>'}</code> tags.
                </h2>
                <CodeBlock lang="jsx">{originalVsCdnSnippet}</CodeBlock>
                <div className="diff aspect-[3/2] rounded-2xl border-2 border-white">
                    <div className="diff-item-1">
                        <div>
                            <ImageWithSizeOverlay src={`/.netlify/images?url=images/corgi.jpg`} overlayPosition="right" />
                        </div>
                    </div>
                    <div className="diff-item-2">
                        <div>
                            <ImageWithSizeOverlay src="/images/corgi.jpg" />
                        </div>
                    </div>
                    <div className="diff-resizer"></div>
                </div>
            </section>
        </div>
    );
}
