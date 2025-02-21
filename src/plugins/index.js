import { addPrefixImage } from "./helpers";

export default {
    install: (Vue) => {
        Vue.prototype.$addPrefixImage = addPrefixImage;
    }
};
