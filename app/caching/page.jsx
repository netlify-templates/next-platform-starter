import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import CachingDemo from './caching-demo'; 

export const metadata = {
  title: 'Caching'
};

const explainer = `
Next.js 16 introduces **enhanced caching APIs**—like \`revalidateTag\`, 
\`revalidatePath\`, and new cache headers.  

In this demo:
- \`/api/hello\` uses \`Cache-Control: public, s-maxage=60, stale-while-revalidate=30\`
- You can trigger cache invalidation with \`revalidateTag('hello')\` and \`revalidatePath('/api/hello')\`
`;

export default async function Page() {
  return (
    <>
      <ContextAlert addedChecksFunction={() => null} className="mb-6" />
      <h1 className="mb-8">Caching APIs</h1>
     
        <>
          <Markdown content={explainer} className="mb-12" />
          <CachingDemo />
        </>
    
    </>
  );
}