// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

import { button } from './.stackbit/models/button';
import { featuredItems } from './.stackbit/models/featured-items';
import { hero } from './.stackbit/models/hero';
import { image } from './.stackbit/models/image';
import { page } from './.stackbit/models/page';
import { quote } from './.stackbit/models/quote';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [button, featuredItems, hero, image, page, quote],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ],
    modelExtensions: [{ name: 'page', type: 'page', urlPath: '/{slug}' }]
});
