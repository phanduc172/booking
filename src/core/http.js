const { hostname, protocol } = window.location

const dev = {
    appHost: `${process.env.VUE_APP_HOST}/`,
    userHost: `${process.env.VUE_APP_USER}/`,
    apiHost: `${process.env.VUE_APP_HOST_API}/`,
    uploadHost: `${process.env.VUE_APP_HOST}/`,
    previewHost: `${process.env.VUE_APP_HOST}/`,
}

const pro = {
    appHost: `${protocol}//${hostname}/`,
    userHost: `${process.env.VUE_APP_USER}/`,
    apiHost: `${protocol}//${hostname}/`,
    uploadHost: `${protocol}//${hostname}/`,
    previewHost: `${protocol}//${hostname}/`,
}

const Http = process.env.NODE_ENV === 'development' ? dev : pro

export { Http }
