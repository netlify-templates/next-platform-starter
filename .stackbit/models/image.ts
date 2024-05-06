import { ObjectModel } from '@stackbit/types';

export const image: ObjectModel = {
    type: 'object',
    name: 'image',
    label: 'Image',
    labelField: 'alt',
    fields: [
        { name: 'src', type: 'image', default: '/images/corgi.jpg' },
        { name: 'alt', type: 'string', default: 'Corgi' }
    ],
};
