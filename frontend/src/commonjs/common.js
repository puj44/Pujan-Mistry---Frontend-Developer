class cookieStorage {
    get = async () => {
        const cookies =  document?.cookie
        if (cookies) {
            return cookies
        }
    }
    set = (value) => {
        document.cookie = value
        return;
    }
    remove = (val) => {
        document.cookie = val+"=;max-age=0"
        return;
    }
}
const cookies = new cookieStorage;
export {cookies};