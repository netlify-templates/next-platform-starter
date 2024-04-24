import Link from 'next/link';

export const Button = ({ label, url, className, 'data-sb-field-path': fieldPath }) => {
    return (
        <Link href={url ?? '/'} className={className} data-sb-field-path={fieldPath}>
            <span data-sb-field-path=".label">{label}</span>
        </Link>
    );
};
