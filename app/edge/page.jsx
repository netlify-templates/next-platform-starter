import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Fallback'
};

const explainer = `
This page is using a [Netlify Edge Function](https://docs.netlify.com/edge-functions/overview/) to rewrite the URL based on visitor geography.

For it to be invoked, please either run this site locally with \`netlify dev\` or deploy it to Netlify.

Edge Functions are framework-agnostic, but are also used behind the scenes to run Next.js Middleware on Netlify.
There are advatanges to using Edge Functions directly, such as the ability to access & transform the response body.

[See more examples](https://edge-functions-examples.netlify.app)
`;

export default function FallbackPage() {
    return (
        <>
            <h1 className="mb-8">You&apos;ve reached the fallback page.</h1>
            <Markdown content={explainer} />
        </>
    );
}
