import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

const themeClassMap = {
    light: 'bg-white text-neutral-900',
    dark: 'bg-primary text-neutral-900'
};

export const Stats = (props) => {
    return (
        <div className={`px-8 py-16 text-center ${themeClassMap[props.theme] ?? themeClassMap['dark']}`}>
            <div className="mx-auto">
                <div className="max-w-2xl mx-auto mb-16">
                    <h2 className="mb-4 text-4xl font-bold" data-sb-field-path=".heading">{props.heading}</h2>
                    {props.body && <Markdown options={{ forceBlock: true }} className="sm:text-xl" data-sb-field-path=".body">
                        {props.body}
                    </Markdown>}
                </div>
                <div className="grid max-w-3xl gap-12 mx-auto sm:grid-cols-3">
                    {props.stats?.length > 0 && props.stats.map((stat, idx) => <StatItem key={idx} theme={props.theme} {...stat} data-sb-field-path={`.stats.${idx}`} />)}
                </div>
            </div>
        </div>
    );
};

const StatItem = (props) => {
    return (
        <div className={`px-4 py-8 rounded-md border-dashed border-2`} data-sb-field-path={props['data-sb-field-path']}>
            <div className="mb-3 text-3xl font-bold" data-sb-field-path=".value">{props.value}</div>
            <div className="text-sm uppercase" data-sb-field-path=".label">{props.label}</div>
        </div>
    );
};
