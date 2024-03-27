import Link from 'next/link';
import { RandomPostId } from '../components/random-post-id';

const cards = [
    /*    {
        text: 'Hello',
        linkText: 'someLink',
        href: '/'
    }*/
];

const currentEnv = process.env.NODE_ENV;

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-8 text-4xl font-bold sm:text-5xl">Netlify Platform Starter - Next.js</h1>
                <p className="mb-6 text-lg">Get started with Next.js and Netlify in seconds.</p>
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="btn btn-primary">
                    Read the Docs
                </Link>
            </section>
            <RunModeCard/>
            {!!cards.length && <CardsGrid />}
            <RandomPostId />
        </div>
    );
}

function RunModeCard() {
    const title = `This site is running in ${currentEnv} mode.`
    const text = `
        In ${currentEnv === 'development' ? 'this' : 'development'} mode, this page is re-rendered each time your load it. 
        In ${currentEnv === 'production' ? 'this' : 'production'} mode, the page is statically built once at deploy time.`
    return <Card title={title} text={text} />
}

function CardsGrid() {
    return (
        <section className="grid gap-6 sm:grid-cols-3">
            {cards.map(({ text, linkText, href }) => {
                return <Card key={text} title="The title" text={text} linkText={linkText} href={href} />
            })}
        </section>
    );
}

function Card({title, text, linkText, href}) {
    return (
        <div className="bg-white text-neutral-600 card">
            <div className="card-body">
                <h3 className="text-neutral-900 card-title">{title}</h3>
                <p>{text}</p>
                { !! linkText && (
                <div className="card-actions">
                    <Link href={href} className="transition link text-neutral-900 hover:opacity-80">
                        {linkText}
                    </Link>
                </div>)}
            </div>
        </div>
    );
}
