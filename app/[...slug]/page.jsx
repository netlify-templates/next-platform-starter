import { notFound } from 'next/navigation';
import { FeaturedItems } from 'components/featured-items';
import { Hero } from 'components/hero';
import { Quote } from 'components/quote';
import { getPageFromSlug, getPagePaths } from 'utils/content';

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
        <div className="self-center w-full max-w-xl px-6 py-10 text-center border-4 border-dashed rounded sm:px-16 sm:py-20 border-white/40 my-[10vh]">
            <p className="mb-2 text-2xl">Empty page! Add sections.</p>
            <p>(this message does not appear in production)</p>
        </div>
    ) : (
        <></>
    );
}
