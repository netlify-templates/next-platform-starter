import { Alert } from '../../components/alert';
import { getNetlifyContext } from '../../utils';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Image CDN'
};

const nextImageSnippet = `
~~~jsx
import Image from 'next/image';

// In your component
<Image src="images/corgi.jpg" width="2400" height="1600" alt="Corgi" />
~~~
`;

const originalVsCdnSnippet = `
~~~jsx
// <== On the left, the original image
<img src="/images/corgi.jpg" width="2400" height="1600" alt="Corgi" />

// ==> On the right, explicitly using the Image CDN endpoint
<img src="/.netlify/images?url=images/corgi.jpg" width="2400" height="1600" alt="Corgi" />
~~~
`;

export default function Page() {
    const ctx = getNetlifyContext();
    return (
        <>
            <section className="flex flex-col items-start gap-6 mb-16 sm:gap-8 sm:mb-24">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Image CDN</h1>
                {!ctx && (
                    <Alert>
                        <p>
                        For full functionality, either run this starter locally via <code>netlify dev</code> (
                    <a href="https://docs.netlify.com/cli/local-development/">docs</a>) or deploy it to Netlify.
                        </p>
                    </Alert>
                )}
                {ctx === 'dev' && (
                    <Alert>
                        <p>
                            In local development, the Image CDN is mocked through the IPX package, and no auto-format detection is performed.<br/>
                            Try this on a site deployed to Netlify!
                        </p>
                    </Alert>
                )}
            </section>
            <section className="mb-16 sm:gap-8 sm:mb-24">
                <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Using next/image component</h2>
                <p className="mb-6">
                    On Netlify, the <code>next/image</code> component is automatically configured to uses our Image CDN and serve optimized images.
                </p>
                <Markdown content={nextImageSnippet} />
                <div className="mt-8 overflow-hidden border-2 border-white rounded-lg">
                    <ImageWithSizeOverlay src="/images/corgi.jpg" width={2400} height={1600} isNextImage={true} />
                </div>
            </section>

            <section className="mb-16 sm:gap-8 sm:mb-24">
                <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Original vs. optimized image: can you tell the difference?</h2>
                <p className="mb-6">
                    This example shows the original image (on the left) vs. the optimized image (on the right), using regular <code>{'<img>'}</code> tags.
                </p>
                <Markdown content={originalVsCdnSnippet} />
                <div className="diff aspect-[3/2] rounded-lg border-2 border-white mt-8">
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
        </>
    );
}
