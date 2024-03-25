import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from '../public/netlify-logo.svg';

export default function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 py-6 sm:py-12">
            <Link href="/">
                <Image src={netlifyLogo} alt="Netlify logo" />
            </Link>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
                <li>
                    <Link href="/blobs" className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2">
                        Blobs
                    </Link>
                </li>
                <li>
                    <Link href="/image-cdn" className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2">
                        Image CDN
                    </Link>
                </li>
                <li>
                    <Link href="/simple-page" className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2">
                        Simple Page
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
