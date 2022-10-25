import {reactive} from "vue";

export const store = reactive({
    user: null,
    token: null,

    setUser(user) {
        this.user = user;
        delete this.user.accessToken;

        localStorage.setItem('user', this.user);
    },

    setToken(token) {
        this.token = token;
        localStorage.setItem('token', this.token);
    },

    getUserFromLocal() {
        this.setUser(localStorage.getItem('user'));
    },

    getTokenFromLocal() {
        this.setToken(localStorage.getItem('token'));
    },

    getFromLocal() {
        this.getTokenFromLocal();
        this.getUserFromLocal();
    },

    clearToken() {
        this.token = null;
    },

    clearUser() {
        this.user = null;
    },

    clearAll() {
        this.clearToken();
        this.clearUser();
    }
});