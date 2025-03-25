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
            <h2 className="mb-4 text-xl text-center">Objects in Blob Store</h2>
            <div className="bg-white rounded-sm text-neutral-900">
                <div className="px-4 py-2.5 text-center">
                    {!keys?.length ? (
                        <span className="inline-flex w-full justify-center py-1.5">Please upload some shapes!</span>
                    ) : (
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
                                            'inline-flex items-center justify-center w-full px-4 py-1.5 rounded-sm text-neutral-900 ' +
                                            (isSelected
                                                ? 'bg-neutral-200'
                                                : 'cursor-pointer transition hover:bg-neutral-200')
                                        }
                                    >
                                        {keyName}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
                {previewData && <BlobPreview data={previewData} />}
            </div>
        </>
    );
}

function BlobPreview({ data }) {
    const fullBlobData = generateBlob(data); // Recreates the SVG path by the existing parameters
    return (
        <div className="p-4 border-t border-neutral-300 aspect-square">
            <div className="mb-4 text-center">{data.name}</div>
            <div className="p-2 font-mono rounded-sm bg-neutral-800 text-neutral-100">
                {JSON.stringify(data, null, ' ')}
            </div>
            <ShapeRenderer svgPath={fullBlobData.svgPath} colors={fullBlobData.parameters.colors} />
        </div>
    );
}
