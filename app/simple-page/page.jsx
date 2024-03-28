import { Alert } from '../../components/alert';
import { Geo } from '../../components/geo';
import { CodeBlock } from '../../components/code-block';

export const metadata = {
    title: 'Simple page'
};

export default function Page() {
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl sm:mb-12">Simple page</h1>
            <Geo />
            <CodeBlock lineNumbers lang="js">
                {`import { CodeBlock } from "../../components/code-block";`}
            </CodeBlock>
            <CodeBlock lineNumbers lang="jsx">
                {`const nextConfig = { reactStrictMode: true, swcMinify: true};`}
            </CodeBlock>
            <Alert>
                <p>This is the alert message.</p>
            </Alert>
        </>
    );
}
