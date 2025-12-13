import { getUserData } from "./userStorage";

async function request(method, endpoint, data) {
    let requestObject = {
        method,
        headers: {},
        endpoint,
    };

    if (data) {
        requestObject.headers['Content-Type'] = 'application/json';
        requestObject.body = JSON.stringify(data);
    }

    const user = getUserData();
    if (user) {
        requestObject.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(endpoint, requestObject);
        if (response.status == 204) {
            // This is when we make Logout request
            return response;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`The request failed with error: ${error}`);
        throw error;
    }
}

export const get = async (endpoint) => await request('GET', endpoint); 
export const post = async (endpoint, body) => await request('POST', endpoint, body);