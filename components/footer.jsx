import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80">
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
};
