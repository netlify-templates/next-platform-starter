'use server';
import { getStore } from '@netlify/blobs';

// Always be sanitizing data in real sites!
export async function uploadShapeAction({ parameters }) {
    const blobStore = getStore('shapes');
    const key = parameters.name;
    await blobStore.setJSON(key, parameters);
    console.log('Stored shape with parameters:', parameters, 'to key:', key);
}

export async function listShapesAction() {
    const blobStore = getStore("shapes");
    const data = await blobStore.list()
    const keys = data.blobs.map(({key}) => key);
    return keys;
}

export async function getShapeAction({keyName}) {
    const blobStore = getStore("shapes");
    const data = await blobStore.get(keyName, {type: "json"});
    return data;
}