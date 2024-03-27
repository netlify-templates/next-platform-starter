import EdgeFunctionExplainer from "../explainer";

export const metadata = {
    title: 'Not Autralia' 
};

export default function Page() {
    return (
        <section className="mb-16 sm:mb-24">
            <header className="mb-8 sm:mb-16">
                <h1 className="text-4xl font-bold sm:text-5xl">You&apos;re not in Australia!</h1>
            </header>
            <EdgeFunctionExplainer />
        </section>
    ); 
}
