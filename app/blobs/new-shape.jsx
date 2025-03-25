'use client';

import { useEffect, useState } from 'react';
import { generateBlob } from 'app/blobs/generator';
import { ShapeRenderer } from './renderer';
import { uploadShapeAction } from './actions';
import { uploadDisabled } from 'utils';

export function NewShape(props) {
    const { setLastMutationTime } = props;
    const [blobData, setBlobData] = useState();
    const [wasUploaded, setWasUploaded] = useState(false);

    const randomizeBlob = () => {
        setBlobData(generateBlob());
        setWasUploaded(false);
    };

    const onUpload = async () => {
        await uploadShapeAction({ parameters: blobData.parameters });
        setWasUploaded(true);
        setLastMutationTime(Date.now());
    };

    useEffect(() => {
        if (!blobData) {
            randomizeBlob();
        }
    }, [blobData]);

    return (
        <>
            <h2 className="mb-4 text-xl text-center">New Random Shape</h2>
            <div className="mb-6 bg-white rounded-sm">
                <div className="p-4 text-center border-b text-neutral-900 border-neutral-300">
                    {blobData?.parameters?.name}
                </div>
                <div className="p-4">
                    <ShapeRenderer svgPath={blobData?.svgPath} colors={blobData?.parameters?.colors} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="btn" onClick={randomizeBlob}>
                    Randomize
                </button>
                <button className="btn" onClick={onUpload} disabled={uploadDisabled || wasUploaded || !blobData}>
                    Upload
                </button>
            </div>
        </>
    );
}
