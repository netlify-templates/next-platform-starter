import { notFound } from 'next/navigation';
import { Hero } from '../../components/hero.jsx';
import { FeaturedItems } from '../../components/featuredItems.jsx';
import { Quote } from '../../components/quote.jsx';
import { getPageFromSlug, getPagePaths } from '../../utils/content.js';

export async function generateStaticParams() {
    const paths = await getPagePaths();
    return paths.map((path) => ({
        slug: path.split('/').filter(Boolean)
    }));
}

const componentMap = {
    featuredItems: FeaturedItems,
    hero: Hero,
    quote: Quote
};

export default async function ComposablePage({ params }) {
    const slug = '/' + (params?.slug ?? ['']).join('/');
    const page = await getPageFromSlug(slug);
    if (!page) {
        return notFound();
    }
    return (
        <div className="flex flex-col w-full gap-16 sm:gap-24" data-sb-object-id={page._id}>
            {page.sections?.length ? (
                page.sections.map((section, idx) => {
                    const Component = componentMap[section.type];
                    return <Component {...section} data-sb-field-path={`sections.${idx}`} key={idx} />;
                })
            ) : (
                <EmptyState />
            )}
        </div>
    );
}

function EmptyState() {
    return process.env.NODE_ENV === 'development' ? (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center gap-2 p-16 border-4 border-gray-400 border-dashed rounded">
                <p className="text-2xl">Empty page! Add sections.</p>
                <p>(this message does not appear in production)</p>
            </div>
        </div>
    ) : (
        <></>
    );
}
