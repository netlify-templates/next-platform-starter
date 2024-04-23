import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import { Button } from './button.jsx';

const themeClassMap = {
    imgLeft: 'md:flex-row-reverse',
    imgRight: 'md:flex-row',
  };

export const Hero = (props) => {
    return (
        <div className="p-8 bg-white rounded">
            <div className={`max-w-6xl mx-auto flex flex-col gap-12 md:items-center ${themeClassMap[props.theme] ?? themeClassMap['imgRight']}`}>
                <div className="flex-1 w-full max-w-xl mx-auto">
                    <h1 className="mb-6 text-4xl font-bold text-neutral-900" data-sb-field-path=".heading">{props.heading}</h1>
                    {props.body && (
                        <Markdown options={{ forceBlock: true }} className="mb-6 text-lg text-neutral-900" data-sb-field-path=".body">
                            {props.body}
                        </Markdown>
                    )}
                    {props.button && <Button {...props.button} />}
                </div>
                <div className="w-full aspect-[4/3] flex-1 relative overflow-hidden rounded-lg">
                    {props.image?.src && <Image src={props.image?.src} alt={props.image?.alt} 
                    fill
                    className='object-cover'
                    priority 
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 600px"
                    data-sb-field-path=".image" />}
                </div>
            </div>
        </div>
    );
};


