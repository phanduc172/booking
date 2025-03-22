import { response } from "./utils";

export const prototype = {
    install(Vue) {
        Vue.prototype.$response = response
    },
}
