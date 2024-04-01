import blobshape from 'blobshape';
import { randomInt, uniqueName } from 'utils';

const gradientColors = [
    ['#e96443', '#904e95'],
    ['#ff5f6d', '#ffc371'],
    ['#eecda3', '#ef629f'],
    ['#4ca1af', '#c4e0e5'],
    ['#c2e59c', '#64b3f4'],
    ['#3ca55c', '#b5ac49']
];

export const fixedSize = 512;

/*
If given existing parameters, creates SVG path based on it (so you can store just the params, not the actual path).
If not, creates new parameter values first.

Returns { parameters, svgPath }.
*/
export function generateBlob(parameters) {
    parameters = {
        seed: null,
        edges: randomInt(3, 20),
        growth: randomInt(2, 9),
        colors: gradientColors[randomInt(0, gradientColors.length - 1)],
        name: uniqueName(),
        ...parameters
    };

    // If seed is not given, a new seed is generated and returned (so it can be stored)
    const { path: svgPath, seedValue: seed } = blobshape({ ...parameters, size: fixedSize });
    return { parameters: { ...parameters, seed }, svgPath };
}
