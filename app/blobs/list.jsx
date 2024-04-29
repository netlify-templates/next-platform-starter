'use client';
import { useEffect, useState } from 'react';
import { listShapesAction, getShapeAction } from './actions';
import { ShapeRenderer } from './renderer';
import { generateBlob } from './generator';

export function StoredBlobsList({ lastMutationTime }) {
    const [keys, setKeys] = useState([]);
    const [selectedKey, setSelectedKey] = useState();
    const [previewData, setPreviewData] = useState();

    useEffect(() => {
        console.log('Fetching keys...');
        listShapesAction().then((response) => {
            setKeys(response);
        });
    }, [lastMutationTime]);

    const onSelect = async (keyName) => {
        setSelectedKey(keyName);
        const data = await getShapeAction({ keyName });
        setPreviewData(data);
    };

    return (
        <>
            <h2 className="mb-4 text-lg text-center">Objects in Blob Store</h2>
            <div className="w-full p-8 bg-white rounded-lg text-neutral-900 min-h-56">
                {keys?.length ? (
                    <div className="space-y-1">
                        {keys.map((keyName) => {
                            const isSelected = keyName === selectedKey;
                            return (
                                <button
                                    key={keyName}
                                    onClick={() => {
                                        onSelect(keyName);
                                    }}
                                    className={
                                        'w-full px-2 py-1 rounded text-left text-neutral-900 hover:bg-neutral-200' + (isSelected ? ' bg-neutral-200 font-bold pointer-events-none' : ' font-normal')
                                    }
                                >
                                    {keyName}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <span>Please upload some shapes!</span>
                )}
                {previewData && <BlobPreview data={previewData} />}
            </div>
        </>
    );
}

function BlobPreview({ data }) {
    const fullBlobData = generateBlob(data); // Recreates the SVG path by the existing parameters
    return (
        <div className="mt-6 border rounded border-neutral-200 lg:mx-16">
            <div className="p-4 text-center">{data.name}</div>
            <div className="p-4 -mx-px font-mono text-sm bg-neutral-800 text-neutral-100">{JSON.stringify(data, null, ' ')}</div>
            <ShapeRenderer svgPath={fullBlobData.svgPath} colors={fullBlobData.parameters.colors} />
        </div>
    );
}
