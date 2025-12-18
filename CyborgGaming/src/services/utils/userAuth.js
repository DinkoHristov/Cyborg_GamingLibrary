import { clearUserData, getUserData, setUserData } from "./userStorage";

export function login(email, password) {
    const user = { email, password, }
    const registeredUser = getUserData();

    if (registeredUser && 
        user.email.localeCompare(registeredUser.email) === 0 &&
        user.password.localeCompare(registeredUser.password) === 0) {
            return true;
    }

    return false;
}

export function register(username, email, password) {
    const user = { username, email, password };
    setUserData(user);

    return user;
}

export function logout() {
    clearUserData();
}