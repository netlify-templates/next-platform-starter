import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-12 sm:py-16">
            <p className="text-sm">
                <Link href="/" className="text-white transition link hover:opacity-80">
                    Next.js on Netlify
                </Link>
            </p>
        </footer>
    );
};
