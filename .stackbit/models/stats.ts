import { ObjectModel } from '@stackbit/types';

export const stats: ObjectModel = {
    name: 'stats',
    type: 'object',
    fields: [
        { name: 'heading', type: 'string' },
        { name: 'body', type: 'markdown' },
        {
            name: 'stats',
            type: 'list',
            items: {
                type: 'object',
                fields: [
                    { name: 'label', type: 'string', default: 'Five-star reviews' },
                    { name: 'value', type: 'string', default: '5M' }
                ]
            }
        },
        { name: 'theme', type: 'enum', options: ['light', 'dark'] }
    ]
};
