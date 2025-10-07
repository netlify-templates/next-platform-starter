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

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Site() {
<div className="mt-8 grid md:grid-cols-3 gap-6">
<Card title="Cloud migration" body="Move apps, files, and databases from on prem to Azure, AWS, or Google Cloud. Less downtime. Better reliability." />
<Card title="Integration" body="Connect ERP, WMS, TMS, CRM, and finance tools with clean data flows and light automation." />
<Card title="Dashboards" body="Power BI or Looker Studio with live KPIs. See delivery times, inventory, and cost trends in one place." />
<Card title="Backup and continuity" body="Safe backups in the cloud. Fast restore plans. Peace of mind." />
<Card title="Security" body="Strong identity and access controls. MFA and audit logs. Safer remote work." />
<Card title="Managed support" body="Monitoring, cost tuning, and small fixes each month for steady improvement." />
</div>
</div>
</section>


{/* Industries */}
<section id="industries" className="py-16 border-t bg-white">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl md:text-3xl font-bold">Industries</h2>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<Card title="Logistics and warehousing" body="Real time visibility and system links across fleet, warehouse, and finance. Great fit for migration and dashboards." />
<Card title="Construction and architecture" body="Cloud workspaces for BIM and design files. Better version control and site to office collaboration." />
<Card title="Professional services" body="SharePoint or Google Workspace migrations. Secure access and tidy document systems." />
<Card title="Retail and ecommerce" body="Stable hosting and clean links from POS to inventory and online stores." />
</div>
</div>
</section>


{/* Approach */}
<section id="approach" className="py-16 border-t">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl md:text-3xl font-bold">Our approach</h2>
<ol className="mt-6 grid gap-4 md:grid-cols-2">
<Step n={1} text="Assess your current systems and goals. Simple discovery. Clear scope." />
<Step n={2} text="Design the target setup in the cloud. Pick the right platform and tools." />
<Step n={3} text="Move data and apps with care. Keep teams working while we migrate." />
<Step n={4} text="Connect key systems. Automate repeat steps. Add dashboards for insight." />
<Step n={5} text="Support and improve. Tune costs. Train your team." />
</ol>
</div>
</section>


{/* Contact */}
<section id="contact" className="py-16 border-t bg-white">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
<p className="mt-2 text-gray-600">Tell us about your goals. We will reply with a simple plan and a timeline.</p>
<form className="mt-6 grid md:grid-cols-2 gap-4 max-w-3xl">
<input placeholder="Name" className="p-3 rounded-xl border" />
<input placeholder="Email" className="p-3 rounded-xl border" />
<input placeholder="Company" className="p-3 rounded-xl border md:col-span-2" />
<textarea placeholder="What do you want to achieve" className="p-3 rounded-xl border md:col-span-2 min-h-[120px]" />
<button type="button" className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium w-fit">Send</button>
</form>
<p className="mt-3 text-xs text-gray-500">By sending this form you agree to be contacted by our team.</p>
</div>
</section>


{/* Footer */}
<footer className="py-8 border-t">
<div className="max-w-6xl mx-auto px-4 text-sm text-gray-500 flex items-center justify-between">
<p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
<div className="flex gap-4">
<a href="#" className="hover:text-blue-600">Privacy</a>
<a href="#" className="hover:text-blue-600">Terms</a>
</div>
</div>
</footer>
</main>
);
}


function Card({ title, body }: { title: string; body: string }) {
return (
<div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow transition">
<h3 className="text-lg font-semibold">{title}</h3>
<p className="mt-2 text-sm text-gray-600">{body}</p>
</div>
);
}


function Step({ n, text }: { n: number; text: string }) {
return (
<li className="flex items-start gap-3">
<div className="h-8 w-8 flex items-center justify-center rounded-full border font-semibold">{n}</div>
<p className="text-sm text-gray-700">{text}</p>
</li>
);
}
