import EdgeFunctionExplainer from "../explainer";

export const metadata = {
    title: 'In Australia'
};

export default function Page() {
    return (
        <section>
            <header className="mb-8 sm:mb-16">
                <h1 className="text-4xl font-bold sm:text-5xl">You are in Australia!</h1>
            </header>
            <EdgeFunctionExplainer />
        </section>
    );
}
