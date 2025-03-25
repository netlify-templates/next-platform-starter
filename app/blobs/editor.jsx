'use client';

import { useState } from 'react';
import { StoredBlobsList } from './list';
import { NewShape } from './new-shape';

export function ShapeEditor(props) {
    // Allow new shape editor to signal that a mutation has occured, triggering the list
    // of stored blobs to be reloaded (you can also use form actions)
    const [lastMutationTime, setLastMutationTime] = useState(0);

    return (
        <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1 w-full">
                <NewShape setLastMutationTime={setLastMutationTime} />
            </div>
            <div className="flex-1 w-full">
                <StoredBlobsList lastMutationTime={lastMutationTime} />
            </div>
        </div>
    );
}
