import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">
                <Link
                    href="https://docs.netlify.com/frameworks/next-js/overview/"
                    className="decoration-dashed text-primary underline-offset-8"
                >
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
}
