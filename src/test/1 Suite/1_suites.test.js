import { describe, expect, test } from 'vitest'
import {doSum, doSubtract, doMultiply, doDivide} from '../../1 Arithemetic/Airthemetic' 

// To create Suite use the describe function,
// which takes two argument
// describe( " Suite Name/ description ", "callback function implementaion")

// suite - 1
describe('Testing My Arithemetic Function', ()=>{

test("Testing doSum",()=>{
    expect(doSum(2, 5)).toBe(7)
    expect(doSum(10, 20)).toBe(30)
})

test("Testing doSubtract", ()=>{
    expect(doSubtract(10, 5)).toBe(5)
    expect(doSubtract(25, 5)).toBe(20)
})

test("Testing doMultiply",()=>{
    expect(doMultiply(10, 5)).toBe(50)
    expect(doMultiply(25, 5)).toBe(125)
})

test("Testing doDivide", ()=>{
    expect(doDivide(10, 5)).toBe(2)
    expect(doDivide(25, 5)).toBe(5)
})
})