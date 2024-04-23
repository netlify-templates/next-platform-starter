import path from 'path';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';

const PAGES_DIR = path.join(process.cwd(), 'content/pages');

function relativePathFromFile(file) {
    return file
        .replace(PAGES_DIR, '')
        .replace(path.extname(file), '')
        .replace(/\/index$/g, '/');
}

function pagePathMap() {
    const allPagePaths = glob.sync(path.join(PAGES_DIR, '**/*.md'));
    return Object.fromEntries(allPagePaths.map((file) => [relativePathFromFile(file), file]));
}

export async function getPagePaths() {
    return Object.keys(pagePathMap());
}

export async function getPageFromSlug(slug) {
    const absPath = pagePathMap()[slug];
    const rawContent = fs.readFileSync(absPath, 'utf8');
    const { data, content } = matter(rawContent);

    return {
        _id: absPath.replace(`${process.cwd()}/`, ''),
        ...data,
        body: content
    };
}
