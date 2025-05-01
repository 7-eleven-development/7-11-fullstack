import { setGasValue, getGasValue } from '../../models/gasSensorModel.js';


describe('Gas Value Module', () => {
    beforeEach(() => {
        // Reset gas value before each test
        setGasValue(null);
    });

    test('should return null initially', () => {
        expect(getGasValue()).toBeNull();
    });

    test('should return the value set by setGasValue', () => {
        const value = 123;
        setGasValue(value);
        expect(getGasValue()).toBe(value);
    });

    test('should overwrite the previous value', () => {
        setGasValue(100);
        setGasValue(200);
        expect(getGasValue()).toBe(200);
    });
});