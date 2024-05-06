import MarkdownToJsx from 'markdown-to-jsx';
import { CodeBlock } from './code-block';

export function Markdown({ content, className, 'data-sb-field-path': fieldPath }) {
    const HighlightedCodeBlock = ({ children }) => {
        const { props } = children;
        const matchLanguage = /lang-(\w+)/.exec(props?.className || '');
        return (
            <CodeBlock
                code={props?.children}
                lang={matchLanguage ? matchLanguage[1] : undefined}
                title={props?.title}
            />
        );
    };

    return (
        <MarkdownToJsx
            className={['markdown', className].join(' ').trim()}
            options={{
                forceBlock: true,
                overrides: {
                    pre: HighlightedCodeBlock
                }
            }}
            data-sb-field-path={fieldPath}
        >
            {content}
        </MarkdownToJsx>
    );
}
