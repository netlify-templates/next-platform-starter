import Link from 'next/link';
import { Alert } from '../../components/alert';

export const metadata = {
    title: 'Fallback'
};

export default function FallbackPage() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl sm:mb-12">You&apos;ve reached the fallback page.</h1>
                <p className="mb-6 leading-7">
                    This page is using a Netlify Edge Function to rewrite the URL based on visitor geography.
                    <br />
                    For it to be invoked, please either run this site locally with <code>netlify dev</code> or deploy to Netlify!
                    <br /><br/>
                    Alternatively, you can use Next.js Middleware, which is also automatically deployed on Netlify as an Edge Function.<br/>
                    However, note that Edge Functions are more powerful (e.g., you can fully transform the response) and framework-agnostic.
                </p>
            <Link href="https://edge-functions-examples.netlify.app" className="transition link hover:opacity-80">
                See more examples
            </Link>
        </>
    );
}
