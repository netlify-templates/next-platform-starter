import { Markdown } from 'components/markdown';
import { ShapeEditor } from './editor';

export const metadata = {
    title: 'Blobs'
};

const explainer = `
[Netlify Blobs](https://docs.netlify.com/blobs/overview/) provides an object store for any kind of data, be it JSON, binary, 
or [really](https://mk.gg/projects/chalkstream) anything else ([really!](https://mk.gg/projects/turbofan)). In this example, the blob store is used to **hold the data of user-generated random blobby shapes**.

Using the blob store is basically zero-config. Below is a Next.js Server Action to upload data (see \`app/blobs/actions.js\`). 
When deployed to Netlify, the Server Action is run by serverless functions, and all context required for the blob service is set-up automatically.

~~~js
'use server';
import { getStore } from '@netlify/blobs';

// TODO: Always be sanitizing data in real sites!
export async function uploadShape({ shapeData }) {
    const blobStore = getStore('shapes');
    const key = data.name;
    await blobStore.setJSON(key, shapeData);
}
~~~

Click "Randomize" to get a shape you like, then hit "Upload".
Choose any existing object to view it.
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl sm:mb-12">Blobs x Blobs</h1>
            <div className="flex flex-col gap-8">
            <Markdown content={explainer} />
            <ShapeEditor />
            </div>
        </>
    );
}
