import EdgeFunctionExplainer from '../explainer';

export const metadata = {
    title: 'Not Autralia'
};

export default function Page() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl sm:mb-12">You&apos;re not in Australia!</h1>
            <EdgeFunctionExplainer />
        </>
    );
}
