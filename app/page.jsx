import Link from 'next/link';
import { Card } from '../components/card';
import { CardsGrid } from '../components/cards-grid';
import { RandomPostId } from '../components/random-post-id';
import { getNetlifyContext } from '../utils';
import { Alert } from '../components/alert';

const cards = [
    /*{
        text: 'Hello',
        linkText: 'someLink',
        href: '/'
    }*/
];

const currentEnv = process.env.NODE_ENV;

export default function Page() {
    return (
        <>
            <section className="flex flex-col items-start gap-6 mb-16 sm:gap-8 sm:mb-24">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Netlify Platform Starter - Next.js</h1>
                <p className="text-lg">Get started with Next.js and Netlify in seconds.</p>
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="btn btn-lg btn-primary sm:btn-wide">
                    Read the Docs
                </Link>
            </section>
            <section className="flex flex-col gap-8">
                <RuntimeContextCard />
                {!!cards?.length && <CardsGrid cards={cards} />}
                <RandomPostId />
            </section>
        </>
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
