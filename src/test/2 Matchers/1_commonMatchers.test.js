import { describe, expect, test } from 'vitest'
import { doSum } from '../../1 Arithemetic/Airthemetic'
import { apple1, apple2, apple3, apple4 } from '../../2 Matchers/matchers'

describe('Testing Primitive Type', ()=>{
    test('Add Sum', ()=>{
        // Pass
        expect(doSum(4, 5)).toBe(9)
        //Fail
        // expect(doSum(4, 5)).toBe(19)
    })

    test('Concat string', ()=>{
        // Pass
        expect('Hello' + ' World').toBe("Hello World")
        //Fail
        // expect('Hello' + 'Earth').toBe('Hello World')
    })
})


describe('Testing Non-Primitive Type', ()=>{
    test("Testing apple1, apple2, apple3 and apple4 matching details",()=>{
        expect(apple1).toBe(apple2)
        // expect(apple1).toBe(apple3) // Fail - Checking the address, instead of properties.
        expect(apple1).toEqual(apple3)
        // expect(apple1).toEqual(apple4) // Fail - properties are Different
    })
})