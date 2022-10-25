import {reactive} from "vue";

export const store = reactive({
    user: null,
    token: null,

    setUser(user) {
        this.user = user;
    },

    setToken(token) {
        this.token = token;
    },

    getUserFromLocal() {
        localStorage.getItem('user');
    },

    getTokenFromLocal() {
        localStorage.getItem('token');
    },

    getFromLocal() {
        this.getTokenFromLocal();
        this.getUserFromLocal();
    }
});