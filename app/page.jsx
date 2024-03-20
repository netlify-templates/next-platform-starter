import Link from 'next/link';

export default function Homepage() {
    return (
        <section className="mb-16 sm:mb-24">
            <header className="mb-16 sm:mb-24">
                <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Netlify Platform Starter - Next.js</h1>
                <p className="mb-6 text-lg">Get started with Next.js and Netlify in seconds.</p>
                <Link href="/" className="btn btn-primary">
                    Next.js on Netlify
                </Link>
            </header>
            <div className="grid gap-6 sm:grid-cols-3">
                <div className="bg-white text-neutral-600 card">
                    <div className="card-body">
                        <h3 className="text-neutral-900 card-title">The Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis velit quis lacinia lacinia. Nunc at facilisis odio.</p>
                        <div className="card-actions">
                            <Link href="/" className="transition link text-neutral-900 hover:opacity-80">
                                View Links
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-neutral-600 card">
                    <div className="card-body">
                        <h3 className="text-neutral-900 card-title">The Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis velit quis lacinia lacinia. Nunc at facilisis odio.</p>
                        <div className="card-actions">
                            <Link href="/" className="transition link text-neutral-900 hover:opacity-80">
                                View Links
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-neutral-600 card">
                    <div className="card-body">
                        <h3 className="text-neutral-900 card-title">The Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis velit quis lacinia lacinia. Nunc at facilisis odio.</p>
                        <div className="card-actions">
                            <Link href="/" className="transition link text-neutral-900 hover:opacity-80">
                                View Links
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
