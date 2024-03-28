import { Code } from 'bright';

export function CodeBlock({ code, lang, lineNumbers, title }) {
    return (
        <Code lang={lang} title={title} lineNumbers={lineNumbers} theme="poimandres">
            {code}
        </Code>
    );
}