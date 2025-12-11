export const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));
export const setUserData = () => sessionStorage.setItem('userData', JSON.stringify(data));

export function clearUserData() {
    let userData = getUserData();
    if (userData) {
        sessionStorage.removeItem('userData');
    }
}