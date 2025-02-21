import { Http } from '../core/http'
let config = {
    api: Http.apiHost,

    GetListCustomer: '/api/customers'

}

let api = new Proxy(config, {
    get(target, name) {
        if (name === 'host_user') return Reflect.get(target, name)
        if (name !== 'params') {
            return (
                Reflect.get(target, 'api').replace(/\/$/, '') +
                Reflect.get(target, name)
            )
        } else {
            return Reflect.get(target, name)
        }
    },
})

api.params = (name, options) => {
    try {
        let endpoint = api[name]
        for (let value in options) {
            if (value && Object.prototype.hasOwnProperty.call(options, value)) {
                endpoint = endpoint.replace(`{${value}}`, options[value])
            }
        }
        return endpoint
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.log(e)
        }
    }
}

export default api
