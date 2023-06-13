import { describe } from 'vitest'

describe('Differentiate among 0, null, undefined and false values', ()=>{
    
    test('null', () => {
        const n = null;
        expect(n).toBeNull(); // Pass
        expect(n).toBeDefined(); // Pass
        // expect(n).toBeUndefined(); // Fail 
        expect(n).not.toBeTruthy(); // Pass
        expect(n).toBeFalsy(); // Pass
      });
      
    test('zero', () => {
        const zero = 0;
        expect(zero).not.toBeNull(); // Pass
        expect(zero).toBeDefined(); // Pass
        expect(zero).not.toBeUndefined(); // Pass
        expect(zero).not.toBeTruthy(); // Pass
        expect(zero).toBeFalsy(); // Pass
      });
})