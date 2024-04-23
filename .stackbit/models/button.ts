import { ObjectModel } from '@stackbit/types';

export const button: ObjectModel = {
    name: 'button',
    type: 'object',
    fields: [
        { name: 'label', type: 'string', default: 'Get Started' },
        { name: 'url', type: 'string', default: '/' },
        { name: 'theme', type: 'enum', options: ['default', 'outline'], default: 'outline' }
    ]
};
