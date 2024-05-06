import { ObjectModel } from '@stackbit/types';

export const hero: ObjectModel = {
    type: 'object',
    name: 'hero',
    label: 'Hero',
    labelField: 'heading',
    fieldGroups: [{ name: 'styles', label: 'Styles' }],
    fields: [
        { name: 'heading', type: 'string', default: 'This Is A Big Hero Headline' },
        { name: 'body', type: 'markdown', default: 'This is the description.' },
        {
            name: 'image',
            type: 'model',
            models: ['image'],
            default: {
                type: 'image',
                src: '/images/corgi-hero.jpg',
                alt: 'Corgi'
            }
        },
        {
            name: 'button',
            type: 'model',
            models: ['button'],
            default: {
                type: 'button',
                label: 'Get Started',
                url: '/'
            }
        },
        {
            name: 'layout',
            type: 'enum',
            controlType: 'button-group',
            options: [
                { label: 'Image Left', value: 'imgLeft' },
                { label: 'Image Right', value: 'imgRight' }
            ],
            default: 'imgRight',
            group: 'styles'
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
            default: 'primary',
            group: 'styles'
        }
    ]
};
