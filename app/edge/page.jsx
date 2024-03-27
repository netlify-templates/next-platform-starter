import Link from 'next/link';

export const metadata = {
    title: 'Fallback'
};

export default function FallbackPage() {
    return (
        <section className="mb-16 sm:mb-24">
            <header className="mb-16 sm:mb-24">
                <h1 className="mb-6 text-4xl font-bold sm:text-5xl">You've reached the fallback page.</h1>
                <p>This page is using a Netlify Edge Function to rewrite the URL based on visitor geography.</p>
                <p>For it to run, please either run locally with <code>netlify dev</code> or deploy to Netlify!</p>
                <p>Alternatively, you can use Next.js Middleware, which is also automatically deployed on Netlify as an Edge Function.
                    However, note that Edge Functions are more powerful and framework-agnostic.
                </p>
                <Link href="https://edge-functions-examples.netlify.app" className="text-white transition link hover:opacity-80">
                See more examples
                </Link>
            </header>
        </section>
    );
}
