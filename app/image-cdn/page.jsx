import { ImageWithSizeOverlay } from './image-with-size-overlay';

export const metadata = {
    title: 'Image CDN'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-16 sm:gap-24">
            <section>
                <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Image CDN</h1>
            </section>
            <section>
                <h2 className="mb-6">next/image</h2>
                <div className="overflow-hidden border-2 border-white rounded-2xl">
                    <ImageWithSizeOverlay src="/images/corgi.jpg" width={2400} height={1600} isNextImage={true} />
                </div>
            </section>
            <section>
                <h2 className="mb-6">img tag</h2>
                <div className="diff aspect-[3/2] rounded-2xl border-2 border-white">
                    <div className="diff-item-1">
                        <div>
                            <ImageWithSizeOverlay src={`/.netlify/images?url=images/corgi.jpg&fm=avif`} width={2400} height={1600} overlayPosition="right" />
                        </div>
                    </div>
                    <div className="diff-item-2">
                        <div>
                            <ImageWithSizeOverlay src="/images/corgi.jpg" width={2400} height={1600} />
                        </div>
                    </div>
                    <div className="diff-resizer"></div>
                </div>
            </section>
        </div>
    );
}
