import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="w-full max-w-xl px-6 py-10 text-center border-4 border-dashed rounded sm:px-16 sm:py-20 border-white/40 mx-auto my-[10vh]">
            <p className="mb-4 text-5xl font-bold">404</p>
            <p className="mb-6">This page could not be found.</p>
            <Link className="btn btn-primary" href="/">Return Home</Link>
        </div>
    );
}
