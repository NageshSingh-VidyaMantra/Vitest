import { describe, expect, test } from 'vitest'
import { doSum } from '../../1 Arithemetic/Airthemetic'
import { apple1, apple2, apple3, apple4 } from '../../2 Matchers/matchers'

/*
  Fundamental of testing a function is by isolate it.
  And provide it some input and check the output with received value.
  Expected value : value we provide to the test.
  Received value : value the test get after the expression or function is resolved inside expect() function.
  at the end check is Received value = Expected value.
  if YES, test Pass
  else test Fail 
 */

describe('Explaining Expected value and received value ', ()=>{
    test('Add Sum', ()=>{

        /* 
        Here we have called expect function, where we are calling our testing function " doSum() "
        doSum take two argument and return there sum.

        where as expect function return 'assertion'
        Then match that returned assertion, to the value Expected by the test.
        below '9' is Expected by the test, we have provide that explicity
        as we know the function will resolve to 9,
        but out test function does not know.
        
        So, it will match that returned assertion / received value to the '9' 

        here 'toBe' is matcher, i.e. doSum(4, 5) === 9
        */
        expect(doSum(4, 5)).toBe(9)
    
    })
})

// Matching primitive type
describe('Testing Primitive Type', ()=>{
    test('Add Sum', ()=>{
        
        // Pass
        expect(doSum(4, 5)).toBe(9)
        
        //Fail - as doSum(4, 5) will return '9', but value expected by it is '19'
        // since 9 != 19, it will fail.
        // expect(doSum(4, 5)).toBe(19) // comment it out and check yourself
    })

    test('Concat string', ()=>{
        
        // Pass 
        expect('Hello' + ' World').toBe("Hello World")
        
        //Fail
        // expect('Hello' + 'Earth').toBe('Hello World')
    })
})

// Matching non-primitive type
describe('Testing Non-Primitive Type', ()=>{


    /*
    we have imported apple1, apple2, apple3, apple4 from our file

    For simplicity I have provided there sructure here

    const apple1 = {
        color: 'red',
        weight: '100 gm'
    }
    
    const apple2 = apple1; // just pointing to the same address as hold by apple 1
    
    const apple3 = {       // both apple1 and apple3 have same properties 
        color: 'red',
        weight: '100 gm'
    }
    
    const apple4 = {      // both apple1 and apple4 have different properties
        color: 'red',
        weight: '150 gm'
    }
    */

    test("Testing apple1, apple2, apple3 and apple4 matching details",()=>{
        
        // Pass
        // Below test passes as 'toBe' here, is checking if both object hold the same address 
        expect(apple1).toBe(apple2) 

        // Fail
        // expect(apple1).toBe(apple3) // Fail - Checking the address, instead of properties, both have different address
        
        // Pass
        // Here we have used toEqual matcher, it will automatically check for nested properties
        expect(apple1).toEqual(apple3)

        // Fail
        // expect(apple1).toEqual(apple4) // Fail - properties are Different
    })

})