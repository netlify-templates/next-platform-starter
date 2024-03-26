const rewrite = async (request, context) => {
    if (context.geo?.country?.code === 'AU') {
        return new URL('/geo/australia', request.url);
    }
};

export const config = {
    path: '/geo'
};

export default rewrite;