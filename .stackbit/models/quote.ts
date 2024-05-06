import { ObjectModel } from '@stackbit/types';

export const quote: ObjectModel = {
    type: 'object',
    name: 'quote',
    label: 'Quote',
    labelField: 'quote',
    fieldGroups: [{ name: 'styles', label: 'Styles' }],
    fields: [
        { name: 'quote', type: 'text', required: true, default: 'This is the quote text.' },
        { name: 'authorName', type: 'string', default: 'Author Name' },
        { name: 'authorTitle', type: 'string', default: 'Author Title' },
        {
            name: 'authorImage',
            type: 'model',
            models: ['image'],
            default: {
                type: 'image',
                src: '/images/corgi-author.jpg',
                alt: 'Corgi'
            }
        },
        {
            name: 'background',
            type: 'enum',
            controlType: 'button-group',
            options: [
                {
                    label: 'None',
                    value: 'none'
                },
                {
                    label: 'Light',
                    value: 'light'
                },
                {
                    label: 'Primary',
                    value: 'primary'
                }
            ],
            default: 'light',
            group: 'styles'
        }
    ]
};
