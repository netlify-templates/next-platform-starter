import { Alert } from '../../components/alert';
import { Geo } from '../../components/geo';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Simple page'
};

const markdownSnippet = `
~~~jsx
import { Alert } from '../../components/alert';
~~~
`;

const markdownSnippetAlt = `
~~~js title="filename.js"
const nextConfig = { reactStrictMode: true, swcMinify: true};
~~~
`;

export default function Page() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl sm:mb-12">Simple page</h1>
            <Geo />
            <Markdown content={markdownSnippet} />
            <Markdown content={markdownSnippetAlt} />
            <Alert>
                <p>This is the alert message.</p>
            </Alert>
        </>
    );
}
