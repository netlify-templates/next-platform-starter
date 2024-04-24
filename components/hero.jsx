import Image from 'next/image';
import { Button } from './button.jsx';
import { Markdown } from './markdown.jsx';

const layoutClassMap = {
    imgLeft: 'md:flex-row-reverse',
    imgRight: 'md:flex-row'
};

const bgClassMap = {
    none: '',
    light: 'px-8 py-12 bg-white text-neutral-900 rounded md:px-12 md:py-16',
    primary: 'px-8 py-12 bg-primary text-neutral-900 rounded md:px-12 md:py-16'
};

const btnClassMap = {
    none: 'btn-primary',
    light: 'btn-primary',
    primary: 'btn-outline btn-accent'
};

export const Hero = ({ heading, body, image, button, layout, background, 'data-sb-field-path': fieldPath }) => {
    return (
        <div className={bgClassMap[background] ?? bgClassMap['none']} data-sb-field-path={fieldPath}>
            <div
                className={`flex flex-col gap-12 md:items-center ${
                    layoutClassMap[layout] ?? layoutClassMap['imgRight']
                }`}
            >
                <div className="flex-1 w-full max-w-xl mx-auto space-y-6">
                    {heading && (
                        <h1 className="text-3xl font-bold sm:text-4xl" data-sb-field-path=".heading">
                            {heading}
                        </h1>
                    )}
                    {body && <Markdown content={body} className="sm:text-lg" data-sb-field-path=".body" />}
                    {button && (
                        <Button
                            {...button}
                            className={`btn sm:btn-lg sm:btn-wide ${btnClassMap[background] ?? btnClassMap['none']}`}
                            data-sb-field-path=".button"
                        />
                    )}
                </div>
                {image?.src && (
                    <div className="w-full aspect-[4/3] flex-1 relative overflow-hidden rounded-lg">
                        <Image
                            src={image?.src}
                            alt={image?.alt || ''}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px"
                            data-sb-field-path=".image"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
