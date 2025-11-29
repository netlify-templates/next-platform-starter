import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">Netlify Platform Starter – Next.js</h1>
                <p className="mb-6 text-lg">
                    Deploy the latest version of Next.js — including Turbopack, React Compiler, and the new caching APIs
                    — on Netlify in seconds. No configuration or custom adapter required.
                </p>
                <Link href="https://docs.netlify.com/frameworks/next-js/overview/" className="btn btn-lg sm:min-w-64">
                    Read the Docs
                </Link>
            </section>
            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <Markdown content={contextExplainer} />
                    <RuntimeContextCard />
                </section>
            )}
            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
            </section><div>
  <img
    src="IMAGE_URL_HERE"
    alt="entry Smoke"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>entry Smoke</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="entry sparkler"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>entry sparkler</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="entry arch"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>entry arch</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="entry floor"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>entry floor</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="360video booth"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>360video booth</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="paper blast & CO2 blast & flower blast"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>paper blast &amp; CO2 blast &amp; flower blast</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="entry pyro"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>entry pyro</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="Bubble & fog Machine"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>Bubble &amp; fog Machine</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="entry balloon (helium balloon)"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>entry balloon (helium balloon)</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="elephant tusk entry (Elephant Teeth Entry)"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>elephant tusk entry (Elephant Teeth Entry)</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="flower entry (Polyethylene Inflatable Flower Entry bouncy)"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>flower entry (Polyethylene Inflatable Flower Entry bouncy)</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="Cold Pyro Rotating Machine Remote Control 360 degree"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>Cold Pyro Rotating Machine Remote Control 360 degree</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>

<div>
  <img
    src="IMAGE_URL_HERE"
    alt="wedding entry trolley"
    style={{ width: "200px", borderRadius: "16px" }}
  />
  <h2>wedding entry trolley</h2>
  <p>Price: (update later)</p>
  <p>
    <a href="YOUTUBE_URL_HERE" target="_blank" rel="noreferrer">
      Click here for YouTube video
    </a>
  </p>
</div>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        const now = new Date().toISOString();
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time ({now}).</p>
            </Card>
        );
    }
}
