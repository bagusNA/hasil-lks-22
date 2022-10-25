import {store} from "../store/store";

export async function authGet (url) {
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.token}`
        }
    });

    return await res.json();
}