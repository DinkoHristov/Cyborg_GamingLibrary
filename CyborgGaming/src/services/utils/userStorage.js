export const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));
export const setUserData = (data) => sessionStorage.setItem('userData', JSON.stringify(data));

export function clearUserData() {
    let userData = getUserData();
    if (userData) {
        sessionStorage.removeItem('userData');
    }
}