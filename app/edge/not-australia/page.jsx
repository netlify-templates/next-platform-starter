import EdgeFunctionExplainer from '../explainer';

export const metadata = {
    title: 'Not Australia'
};

export default function Page() {
    return (
        <>
            <h1>You&apos;re not in Australia!</h1>
            <EdgeFunctionExplainer />
        </>
    );
}
