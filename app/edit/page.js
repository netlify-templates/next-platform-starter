import { Hero } from '../../components/hero.jsx';
import { Stats } from '../../components/stats.jsx';
import { getPageFromSlug, getPagePaths } from '../../utils/content.js';

export async function generateStaticParams() {
    const paths = await getPagePaths();
    return paths.map((path) => ({
        slug: path.split('/').filter(Boolean)
    }));
}

const componentMap = {
    hero: Hero,
    stats: Stats
};

export default async function ComposablePage({ params }) {
    const slug = '/' + (params?.slug ?? ['']).join('/');
    const page = await getPageFromSlug(slug);
    return (
        <div data-sb-object-id={page._id}>
            {page.sections?.length ? (
                page.sections.map((section, idx) => {
                    const Component = componentMap[section.type];
                    return (
                        <div data-sb-field-path={`sections.${idx}`} key={idx}>
                            <Component {...section} />
                        </div>
                    );
                })
            ) : (
                <EmptyState />
            )}
        </div>
    );
}

function EmptyState() {
    return process.env.NODE_ENV === 'development' ? (
        <div className="flex items-center justify-center w-full py-32">
            <div className="flex flex-col items-center gap-2 p-16 border-4 border-gray-400 border-dashed rounded">
                <span className="text-2xl">Empty page! add sections.</span>
                <span>(this message does not appear in production)</span>
            </div>
        </div>
    ) : (
        <></>
    );
}
