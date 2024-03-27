import { Code } from "bright"

export function CodeBlock({ children, lang, lineNumbers, title }) {
    return (
        <Code lang={lang} lineNumbers={lineNumbers} title={title} theme="poimandres">{children?.trim()}</Code>
    );
};
