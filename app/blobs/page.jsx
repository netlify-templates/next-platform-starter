import { BlobContainer } from './blob-container';

export const metadata = {
    title: 'Blobs'
};

export default function Page() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl sm:mb-12">Blobs</h1>
            <BlobContainer />
        </>
    );
}
