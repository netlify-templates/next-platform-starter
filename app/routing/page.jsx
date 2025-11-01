import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Redirects & Rewrites'
};

const explainer = `
Next.js supports [redirects](https://nextjs.org/docs/app/api-reference/next-config-js/redirects) and [rewrites](https://nextjs.org/docs/app/api-reference/next-config-js/rewrites) configured in \`next.config.js\`.

**Redirects** change the URL in the browser and send the user to a different location. They're useful for:
- Moving content to new locations
- Forwarding users to external sites
- Creating URL aliases with SEO-friendly permanent redirects

**Rewrites** proxy the request to a different path without changing the URL in the browser. They're useful for:
- Creating cleaner URLs that map to complex paths
- API endpoint aliases
- Migrating from old URL structures without breaking links

This site demonstrates both with several examples you can try below.
`;

const redirectsSnippet = `
### Redirects

~~~js
// next.config.js
redirects() {
  return [
    {
      source: '/docs',
      destination: 'https://docs.netlify.com/frameworks/next-js/overview/',
      permanent: false, // Temporary (307)
    },
    {
      source: '/old-blog/:slug',
      destination: '/classics',
      permanent: true, // Permanent (308)
    },
    {
      source: '/github',
      destination: 'https://github.com/netlify-templates/next-platform-starter',
      permanent: false,
    },
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
  ];
}
~~~
`;

const rewritesSnippet = `
### Rewrites

~~~js
// next.config.js
rewrites() {
  return [
    {
      source: '/api/health',
      destination: '/quotes/random', // Proxies to the quotes API
    },
    {
      source: '/blog',
      destination: '/classics', // Shows classics content under /blog URL
    },
  ];
}
~~~
`;

export default function Page() {
    return (
        <>
            <ContextAlert className="mb-6" />
            <h1 className="mb-8">Redirects & Rewrites</h1>
            <Markdown content={explainer} className="mb-8" />

            <div className="grid gap-6 mb-8 md:grid-cols-2">
                <Card title="Try Redirects">
                    <p className="mb-4">These links will redirect you to a different URL (notice the URL change in your browser):</p>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/docs" className="link">
                                /docs → Netlify Docs
                            </Link>
                        </li>
                        <li>
                            <Link href="/github" className="link">
                                /github → GitHub Repo
                            </Link>
                        </li>
                        <li>
                            <Link href="/home" className="link">
                                /home → Homepage
                            </Link>
                        </li>
                        <li>
                            <Link href="/old-blog/example" className="link">
                                /old-blog/:slug → /classics
                            </Link>
                        </li>
                    </ul>
                </Card>

                <Card title="Try Rewrites">
                    <p className="mb-4">These links use rewrites to show different content while keeping the URL (notice the URL stays the same):</p>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/api/health" className="link">
                                /api/health → Shows random quote
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="link">
                                /blog → Shows classics page
                            </Link>
                        </li>
                    </ul>
                </Card>
            </div>

            <Markdown content={redirectsSnippet} className="mb-8" />
            <Markdown content={rewritesSnippet} />
        </>
    );
}
