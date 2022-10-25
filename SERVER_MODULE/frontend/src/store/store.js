import {reactive} from "vue";

export const store = reactive({
    user: null,
    token: null,

    setUser(user) {
        this.user = user;
        if (this.user && this.user.accessToken)
            delete this.user.accessToken;

        localStorage.setItem('user', JSON.stringify(this.user));
    },

    setToken(token) {
        this.token = token;
        localStorage.setItem('token', JSON.stringify(this.token));
    },

    getUserFromLocal() {
        this.setUser(JSON.parse(localStorage.getItem('user')));
    },

    getTokenFromLocal() {
        this.setToken(JSON.parse(localStorage.getItem('token')));
    },

    getFromLocal() {
        this.getTokenFromLocal();
        this.getUserFromLocal();
    },

    clearToken() {
        this.setToken(null);
    },

    clearUser() {
        this.setUser(null);
    },

    clearAll() {
        this.clearToken();
        this.clearUser();
    }
});