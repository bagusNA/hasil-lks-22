import {store} from "../store/store";

export async function authPost (url, data = null) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.token}`
        }
    });

    return await res.json();
}