import { ageClassification, weekFn } from "./script.js";


describe("function ageClassification", () => {

    it("should return null for age < 0", () => {
        expect(ageClassification(-1)).toBe(null);
    });

    it("should return 'Дитинство' for age = 0", () => {
        expect(ageClassification(0)).toBe('Дитинство');
    });

    it("should return 'Дитинство' for age between 1 and 24", () => {
        expect(ageClassification(1)).toBe('Дитинство');
        expect(ageClassification(24)).toBe('Дитинство');
    });

    it("should return 'Молодість' for age between 1 and 44", () => {
        expect(ageClassification(24.01)).toBe('Молодість');
        expect(ageClassification(44)).toBe('Молодість');
    });

    it("should return 'Зрілість' for age between 44.01 and 65", () => {
        expect(ageClassification(44.01)).toBe('Зрілість');
        expect(ageClassification(65)).toBe('Зрілість');
    });

    it("should return 'Старість' for age between 65.01 and 75", () => {
        expect(ageClassification(65.01)).toBe('Старість');
        expect(ageClassification(75)).toBe('Старість');
    });

    it("should return 'Довголіття' for age between 75.01 and 90", () => {
        expect(ageClassification(75.01)).toBe('Довголіття');
        expect(ageClassification(90)).toBe('Довголіття');
    });

    it("should return 'Рекорд' for age between 90.01 and 122", () => {
        expect(ageClassification(90.01)).toBe('Рекорд');
        expect(ageClassification(122)).toBe('Рекорд');
    });

    it("should return null for age between 122.01 and 150", () => {
        expect(ageClassification(122.01)).toBe(null);
        expect(ageClassification(150)).toBe(null);
    });

});



describe("function weekFn", () => {

    it("should return 'Понеділок' for cond = 1", () => {
        expect(weekFn(1)).toBe('Понеділок');
    });

    it("should return 'Вівторок' for cond = 2", () => {
        expect(weekFn(2)).toBe('Вівторок');
    });

    it ("should return 'Середа' for cond = 3", () => {
        expect(weekFn(3)).toBe('Середа');
    });

    it ("should return 'Четвер' for cond = 4", () => {
        expect(weekFn(4)).toBe('Четвер');
    });

    it ("should return 'П\'ятниця' for cond = 5", () => {
        expect(weekFn(5)).toBe('П\'ятниця');
    });

    it ("should return 'Субота' for cond = 6", () => {
        expect(weekFn(6)).toBe('Субота');
    });

    it ("should return 'Неділя' for cond = 7", () => {
        expect(weekFn(7)).toBe('Неділя');
    });

    it ("should return null for cond = 'String'", () => {
        expect(weekFn('String')).toBe(null);
    });

    it ("should return null for cond = 9 (invalid day number)", () => {
        expect(weekFn(9)).toBe(null);
    });

    it ("should return null for cond = 1.5 (invalid not-integer)", () => {
        expect(weekFn(1.5)).toBe(null);
    });

})