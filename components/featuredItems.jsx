import Image from 'next/image';
import { Markdown } from './markdown.jsx';

const bgClassMap = {
    none: '',
    light: 'px-8 py-12 bg-white text-neutral-900 rounded md:px-12 md:py-16',
    primary: 'px-8 py-12 bg-primary text-neutral-900 rounded md:px-12 md:py-16'
};

export const FeaturedItems = ({ heading, body, items, background, 'data-sb-field-path': fieldPath }) => {
    return (
        <div className={bgClassMap[background] ?? bgClassMap['none']} data-sb-field-path={fieldPath}>
            {heading && (
                <h2 className="text-3xl font-bold text-center sm:text-4xl" data-sb-field-path=".heading">
                    {heading}
                </h2>
            )}
            {body && (
                <Markdown
                    content={body}
                    className={`text-center ${heading && 'mt-2'} sm:text-lg`}
                    data-sb-field-path=".body"
                />
            )}
            {items?.length > 0 && (
                <div className={`grid gap-6 ${(heading || body) && 'mt-12'} sm:grid-cols-3 md:gap-12`}>
                    {items.map((item, idx) => (
                        <Item key={idx} {...item} data-sb-field-path={`.items.${idx}`} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Item = ({ heading, body, image, 'data-sb-field-path': fieldPath }) => {
    return (
        <div className="border-2 border-current border-dashed card card-compact" data-sb-field-path={fieldPath}>
            <div className="card-body">
                {image?.src && (
                    <figure className="w-full aspect-[4/3] relative">
                        <Image
                            src={image?.src}
                            alt={image?.alt || ''}
                            fill
                            className="object-cover rounded"
                            priority
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px"
                            data-sb-field-path=".image"
                        />
                    </figure>
                )}
                {heading && (
                    <h3 className="card-title" data-sb-field-path=".heading">
                        {heading}
                    </h3>
                )}
                {body && <Markdown content={body} data-sb-field-path=".body" />}
            </div>
        </div>
    );
};
