import { ObjectModel } from '@stackbit/types';

export const featuredItems: ObjectModel = {
    type: 'object',
    name: 'featuredItems',
    label: 'Featured Items',
    labelField: 'heading',
    fieldGroups: [{ name: 'styles', label: 'Styles' }],
    fields: [
        { name: 'heading', type: 'string', default: 'This Is The Headline' },
        { name: 'body', type: 'markdown', default: 'This is the description' },
        {
            name: 'items',
            type: 'list',
            items: {
                type: 'object',
                fields: [
                    { name: 'heading', type: 'string', default: 'Item Title' },
                    { name: 'body', type: 'markdown', default: 'Item text.' },
                    {
                        name: 'image',
                        type: 'model',
                        models: ['image'],
                        default: {
                            type: 'image',
                            src: '/images/corgi.jpg',
                            alt: 'Corgi'
                        }
                    },
                ],
            },
            default: [
                {
                    heading: 'Item Title',
                    body: 'Item text.',
                    image: {
                        type: 'image',
                        src: '/images/corgi.jpg',
                        alt: 'Corgi'
                    }
                },
                {
                    heading: 'Item Title',
                    body: 'Item text.',
                    image: {
                        type: 'image',
                        src: '/images/corgi.jpg',
                        alt: 'Corgi'
                    }
                },
                {
                    heading: 'Item Title',
                    body: 'Item text.',
                    image: {
                        type: 'image',
                        src: '/images/corgi.jpg',
                        alt: 'Corgi'
                    }
                }
            ]
            
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
