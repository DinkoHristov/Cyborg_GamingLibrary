import { get, post } from "./requester";
import { loginEndpoint, logoutEndpoint, registerEndpoint } from "./urls";
import { clearUserData, setUserData } from "./userStorage";

export async function login(email, password) {
    const data = await post(loginEndpoint, { email, password });
    setUserData(data);
}

export async function register(username, email, password) {
    const data = await post(registerEndpoint, { username, email, password });
    setUserData(data);
}

export async function logout() {
    await get(logoutEndpoint);
    clearUserData();
}