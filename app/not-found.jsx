import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center gap-2 p-16 border-4 border-gray-400 border-dashed rounded">
                <p className="text-3xl font-bold">404</p>
                <p>This page could not be found.</p>
                <Link href="/">Return Home</Link>
            </div>
        </div>
    );
}
