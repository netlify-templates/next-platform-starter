import Link from 'next/link';

const themeClassMap = {
    default: 'btn-primary',
    outline: 'btn-accent btn-outline'
};

export const Button = (props) => {
    return (
        <Link
            href={props.url ?? '/'}
            className={`btn btn-lg sm:btn-wide ${themeClassMap[props.theme] ?? themeClassMap['default']}`}
            data-sb-field-path=".button"
        >
            <span data-sb-field-path=".label">{props.label}</span>
        </Link>
    );
};
