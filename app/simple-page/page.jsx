import { Geo } from "../../components/Geo";

export const metadata = {
    title: 'Simple page'
};

export default function Page() {
    return (
        <section className="mb-16 sm:mb-24">
            <header className="mb-16 sm:mb-24">
                <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Simple page</h1>
            </header>
            <Geo />
        </section>
    );
}
