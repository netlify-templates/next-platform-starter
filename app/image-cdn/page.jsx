import Image from 'next/image';
import { Alert } from 'components/alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { ImageWithSizeOverlay } from './image-with-size-overlay';

export const metadata = {
    title: 'Image CDN'
};

const sampleImage = '/images/corgi.jpg';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';
const sampleImageSrcSet = [640, 1280, 2048]
    .map((size) => {
        return `/.netlify/images?url=${sampleImage}&w=${size}${forceWebP ? '&fm=webp' : ''} ${size}w`;
    })
    .join(', ');

const nextImageSnippet = `
When running on Netlify, \`next/image\` is automatically set-up to use Netlify Image CDN for optimized images.

~~~jsx
import Image from 'next/image';

// In your component
<Image src="/images/corgi.jpg" alt="Corgi" /* ... additional props */ />
~~~
`;

const originalVsCdnSnippet = `
In the code below, a regular \`<img>\` tag is used in both cases for a framework-agnostic example. 
Other than using \`next/image\` or rolling your own \`<img>\` tags, you can also use the excellent [unpic-img](https://unpic.pics/).

~~~jsx
// <== On the left, the original image
<img src="/images/corgi.jpg" alt="Corgi" />

// ==> On the right, explicitly using Netlify Image CDN endpoint for a responsive image
<img 
  srcSet="/.netlify/images?url=images/corgi.jpg&w=640 640w, /.netlify/images?url=images/corgi.jpg&w=1280 1280w, /.netlify/images?url=images/corgi.jpg&w=2048 2048w"
  sizes="(max-width: 1024px) 100vw, 1024px" 
  alt="Corgi" 
/>
~~~
`;

export default function Page() {
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
                            Running in local development mode. Image optimization is run locally without format
                            detection, so format is fixed to WebP.
                            <br />
                            Run this site on Netlify for automatic format detection!
                        </p>
                    </Alert>
                )}
            </section>
            <section className="mb-16 sm:gap-8 sm:mb-24">
                <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Using next/image component</h2>
                <Markdown content={nextImageSnippet} />
                <div
                    className="mt-8 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg"
                    style={{ aspectRatio: '3/2' }}
                >
                    <Image
                        src="/images/corgi.jpg"
                        priority
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Corgi"
                    />
                </div>
                <span className="text-sm italic">
                    Credit: photo by{' '}
                    <a href="https://unsplash.com/@alvannee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Alvan Nee
                    </a>{' '}
                    on{' '}
                    <a href="https://unsplash.com/photos/long-coated-white-and-brown-dog-lvFlpqEvuRM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Unsplash
                    </a>
                </span>
            </section>

            <section className="mb-16 sm:gap-8 sm:mb-24">
                <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
                    Original vs. optimized image: can you tell the difference?
                </h2>
                <Markdown content={originalVsCdnSnippet} />
                <div className="diff aspect-[3/2] rounded-lg border-2 border-white mt-8">
                    <div className="diff-item-1">
                        <div>
                            <ImageWithSizeOverlay
                                srcSet={sampleImageSrcSet}
                                sizes={sampleImageSrcSet}
                                overlayPosition="right"
                            />
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
