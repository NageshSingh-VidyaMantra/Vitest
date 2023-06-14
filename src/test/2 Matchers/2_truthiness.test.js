import { describe, expect } from 'vitest'

// vitest provide multiple matchers
// Here is the link : https://vitest.dev/api/expect.html

describe("Differentiate among '0', 'null', 'undefined' and 'false' values", ()=>{
    
    test('null', () => {
        const n = null;
        expect(n).toBeNull(); // Pass as n === null
        expect(n).toBeDefined(); // Pass as n is defined 
        // expect(n).toBeUndefined(); // Fail as n is defined
        expect(n).not.toBeTruthy(); // Pass as n is false, 'not' is like '!', i.e  ==> null != true  
        expect(n).toBeFalsy(); // Pass as null == false
    });
      
    test('zero', () => {
        const zero = 0;
        expect(zero).not.toBeNull(); // Pass as 0 is NOT null
        expect(zero).toBeDefined(); // Pass as 0 is defined
        expect(zero).not.toBeUndefined(); // Pass as 0 is defined
        expect(zero).not.toBeTruthy(); // Pass as 0 != true
        expect(zero).toBeFalsy(); // Pass as 0 == false
    });
})

// NOTE : There is no direct matcher to check, if returned assertion value is Zero.