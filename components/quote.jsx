import Image from 'next/image';

const bgClassMap = {
    none: '',
    light: 'px-8 py-12 bg-white text-neutral-900 rounded md:px-12 md:py-16',
    primary: 'px-8 py-12 bg-primary text-neutral-900 rounded md:px-12 md:py-16'
};

export const Quote = ({ quote, authorName, authorTitle, authorImage, background, 'data-sb-field-path': fieldPath }) => {
    return (
        <div className={bgClassMap[background] ?? bgClassMap['none']} data-sb-field-path={fieldPath}>
            <blockquote className="flex flex-col items-center gap-8">
                <p className="text-xl text-center sm:text-2xl max-w-[45ch]" data-sb-field-path=".quote">
                    {quote}
                </p>
                {(authorName || authorTitle || authorImage?.src) && (
                    <footer className="flex items-center gap-4">
                        {authorImage?.src && (
                            <div className="w-16 sm:w-24 shrink-0 aspect-square">
                                <Image
                                    src={authorImage?.src}
                                    alt={authorImage?.alt || ''}
                                    width={96}
                                    height={96}
                                    className="object-cover w-full h-full rounded-full"
                                    data-sb-field-path=".authorImage"
                                />{' '}
                            </div>
                        )}
                        {(authorName || authorTitle) && (
                            <div className={authorImage?.src ? 'text-left': 'text-center'}>
                                {authorName && (
                                    <p className="sm:text-lg" data-sb-field-path=".authorName">
                                        {authorName}
                                    </p>
                                )}
                                {authorTitle && <p className="text-sm sm:text-base" data-sb-field-path=".authorName">{authorTitle}</p>}
                            </div>
                        )}
                    </footer>
                )}
            </blockquote>
        </div>
    );
};
