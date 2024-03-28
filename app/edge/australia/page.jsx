import EdgeFunctionExplainer from '../explainer';

export const metadata = {
    title: 'In Australia'
};

export default function Page() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl sm:mb-12">You are in Australia!</h1>
            <EdgeFunctionExplainer />
        </>
    );
}
