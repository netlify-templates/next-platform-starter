import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-12 sm:py-16">
            <p className="text-sm">
                <Link href="/" className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80 hover:no-underline">
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
};
