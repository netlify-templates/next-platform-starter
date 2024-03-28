import Link from 'next/link';
import { Card } from '../components/card';
import { CardsGrid } from '../components/cards-grid';
import { RandomPostId } from '../components/random-post-id';

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
                <RunModeCard />
                {!!cards?.length && <CardsGrid cards={cards} />}
                <RandomPostId />
            </section>
        </>
    );
}

function RunModeCard() {
    const title = `This site is running in ${currentEnv} mode.`;
    const text = `
        In ${currentEnv === 'development' ? 'this' : 'development'} mode, this page is re-rendered each time your load it. 
        In ${currentEnv === 'production' ? 'this' : 'production'} mode, the page is statically built once at deploy time.`;
    return <Card title={title} text={text} />;
}
