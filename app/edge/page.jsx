import Link from 'next/link';

export const metadata = {
    title: 'Fallback'
};

export default function FallbackPage() {
    return (
        <section>
            <h1 className="mb-8 text-4xl font-bold sm:mb-12 sm:text-5xl">You&apos;ve reached the fallback page.</h1>
            <p className="mb-6">This page is using a Netlify Edge Function to rewrite the URL based on visitor geography.</p>
            <p className="mb-6">For it to run, please either run locally with <code>netlify dev</code> or deploy to Netlify!</p>
            <p className="mb-6">Alternatively, you can use Next.js Middleware, which is also automatically deployed on Netlify as an Edge Function. However, note that Edge Functions are more powerful and framework-agnostic.</p>
            <Link href="https://edge-functions-examples.netlify.app" className="text-white transition link hover:opacity-80">
            See more examples
            </Link>
        </section>
    );
}