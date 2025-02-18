import Vue from 'vue';
import api from '@/api';

export default {
    actions: {
        async GetContact(_, options = {}) {
            let response = await Vue.axios({
                method: 'GET',
                url: api.GetContact,
                params: options,
            });

            return response.data;

        },
        async CreateContact(_, entry) {
            let response = await Vue.axios({
                method: 'POST',
                url: api.CreateContact,
                data: entry,
            });

            return response.data;
        },
        async UpdateContact(_, entry) {
            let response = await Vue.axios({
                method: 'PUT',
                url: api.UpdateContact,
                data: entry,
            });

            return response.data;
        },
    }
}