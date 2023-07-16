export const searchDebounce = (func, timeout = 700) => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this); }, timeout);
}

