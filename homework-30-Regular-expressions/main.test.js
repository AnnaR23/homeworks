import {isValidEmail, isValidUrl} from './functions.js';



describe ("isValidEmail", () => {
    it("should return true for valid email", () => {
        expect(isValidEmail('example@example.com')).toBe(true);
    });
    it("should return false for invalid email", () => {
        expect(isValidEmail('invalid-email')).toBe(false);
    })
});



describe ("isValidUrl", () => {
    it("should return true for valid URL", () => {
        expect(isValidUrl('https://www.example.com')).toBe(true);
    });
    it("should return false for invalid url", () => {
        expect(isValidUrl('invalid-url')).toBe(false);
    });
});

