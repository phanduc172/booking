export default {
    namespaced: true,
    state: {
        rooms: [],
    },
    mutations: {
        SET_ROOMS(state, rooms) {
            state.rooms = rooms;
        },
    },
    actions: {
        updateRooms({ commit }, rooms) {
            commit("SET_ROOMS", rooms);
        },
    },
    getters: {
        getRooms: (state) => state.rooms,
    }
};
