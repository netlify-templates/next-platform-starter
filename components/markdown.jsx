import MarkdownToJsx from 'markdown-to-jsx';
import { CodeBlock } from './code-block';

export function Markdown({ content }) {
    const HighlightedCodeBlock = ({ children }) => {
        const { props } = children;
        const matchLanguage = /lang-(\w+)/.exec(props?.className || '');
        return <CodeBlock code={props?.children} lang={matchLanguage ? matchLanguage[1] : undefined} title={props?.title} />;
    };

    return (
        <MarkdownToJsx
            className="markdown"
            options={{
                overrides: {
                    pre: HighlightedCodeBlock
                }
            }}
        >
            {content}
        </MarkdownToJsx>
    );
}
