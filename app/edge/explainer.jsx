import { promises as fs } from 'fs';
import Link from 'next/link';
import { CodeBlock } from '../../components/code-block';

const edgeFunctionFile = './netlify/edge-functions/rewrite.js';

export default async function EdgeFunctionExplainer() {
    const code = (await fs.readFile(edgeFunctionFile)).toString();
    return (
        <>
            <p className="mb-6">This page is using a Netlify Edge Function to rewrite the URL based on visitor geography.</p>
            <CodeBlock lineNumbers lang="js" title={edgeFunctionFile} code={code} />
            <p className="mt-8">
                <Link href="https://edge-functions-examples.netlify.app" className="transition link hover:opacity-80">
                    See more examples
                </Link>
            </p>
        </>
    );
}
