const addPrefixImage = (src) => {
    src ||= require('@/assets/images/default.jpg');
    if (src && (src.startsWith('http') || src.startsWith('/img'))) {
        return src;
    }
    return process.env.VUE_APP_HOST_API + src;
};

export { addPrefixImage };
