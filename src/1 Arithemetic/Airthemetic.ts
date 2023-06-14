/* 
  This File contain basic arithematic functions
*/

export function doSum(a: number, b: number){
    return a + b;
}

export function doSubtract(a: number, b: number){
    if(a > b) return a - b;
    else if(a < b) return b - a;
    else 0
}

export function doMultiply(a: number, b: number){
    return a * b;
}

export function doDivide(a: number, b: number){
    if(a > b) return a/b;
    else if(a < b) return b/a;
    else 1;
}