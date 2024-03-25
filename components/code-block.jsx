import { Code } from "bright"

export function CodeBlock({ children, lang, lineNumbers }) {
    return (
        <Code lang={lang} lineNumbers={lineNumbers} theme="poimandres">{children?.trim()}</Code>
    );
};
