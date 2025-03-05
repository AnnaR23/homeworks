export function isValidEmail(email) {
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;
    return emailRegExp.test(email);
}


export function isValidUrl(url) {
    const urlRegExp = /^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
    return urlRegExp.test(url);
}
