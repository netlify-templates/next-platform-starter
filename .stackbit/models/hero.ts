import { ObjectModel } from '@stackbit/types';

export const hero: ObjectModel = {
    name: 'hero',
    type: 'object',
    fields: [
        { name: 'heading', type: 'string'},
        { name: 'body', type: 'markdown'},
        {
            name: 'image',
            type: 'object',
            fields: [
                { name: 'src', type: 'image', default: "/images/fpo-shapes.png"},
                { name: 'alt', type: 'string' }
            ]
        },
        { name: 'button', type: 'model', models: ['button'] },
        { name: 'theme', type: 'enum', options: ['imgLeft', 'imgRight'] }
    ]
};
