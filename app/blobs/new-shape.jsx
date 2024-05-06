'use client';

import { useEffect, useState } from 'react';
import { generateBlob } from 'app/blobs/generator';
import { ShapeRenderer } from './renderer';
import { uploadShapeAction } from './actions';
import { uploadDisabled } from 'utils/general';

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
            <h2 className="mb-4 text-lg text-center">New Random Shape</h2>
            <div className="mb-6 bg-white rounded-lg">
                <div className="p-4 text-center border-b min-h-14 border-neutral-200 text-neutral-900">
                    {blobData?.parameters?.name}
                </div>
                <div className="p-4">
                    <ShapeRenderer svgPath={blobData?.svgPath} colors={blobData?.parameters?.colors} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary" onClick={randomizeBlob}>
                    Randomize
                </button>
                <button className="btn btn-primary" onClick={onUpload} disabled={uploadDisabled || wasUploaded || !blobData}>
                    Upload
                </button>
            </div>
        </>
    );
}
