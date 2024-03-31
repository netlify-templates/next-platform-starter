import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Alert } from 'components/alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The content of the card below is fetched by the client from the Route Handler \`api/quotes/random\`, with a random quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-4 sm:gap-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Netlify Platform Starter - Next.js</h1>
                <p className="text-lg">Get started with Next.js and Netlify in seconds.</p>
                <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Read the Docs
                </Link>
            </section>
            <section className="flex flex-col gap-4">
                <Markdown content={contextExplainer} />
                <RuntimeContextCard />
            </section>
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            { /* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}

function RuntimeContextCard() {
    const currentContext = getNetlifyContext();
    if (!currentContext) {
        return (
            <Alert>
                <p>
                    For full functionality, either run this starter locally via <code>netlify dev</code> (
                    <a href="https://docs.netlify.com/cli/local-development/">docs</a>) or deploy it to Netlify.
                </p>
            </Alert>
        );
    } else {
        const title = `Netlify Context: running in ${currentContext} mode.`;
        if (currentContext === 'dev') {
            return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
        } else {
            return <Card title={title} text="This page was statically-generated at build time." />;
        }
    }
}
