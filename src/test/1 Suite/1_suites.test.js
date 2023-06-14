import { describe, test } from 'vitest'

/*
  The fundamental idea of unit testing is that you test only one piece of functionality
  in your application that usually is implemented by one function.

  And you test it in isolation – 
  meaning that all other parts of your application which 
  that function depends on are not used by your tests.
  Instead, they are imitated by your tests.
*/


/*
  We create Suite by using the describe function, where we write our test case to test our function
  It take two argument
  descqribe( " Suite Name/ description ", "callback function implementaion")
*/

// suite - 1
describe('Testing My Custom Function from File 1', ()=>{

    /** Multiple test can be written in a suite */

    /* 
       TEST - 1
       like describe, test also take two arguments
       test( " Test Name/ description ", "callback function implementaion")
     */
    test('My first test case', ()=>{
        
      /*
        Here we do the unit testing by matching,
        Expected value : value we provide to the test.
        Received value : value the test get after the expression or function is resolved.
        at the end check is Received value = Expected value.
        if YES, test Pass
        else test Fail 
      */
    
    })

    // TEST - 2
    test('My second test case', ()=>{})

    // TEST - 3
    test('My third test case', ()=>{})

})

// suite - 2
describe('Testing My Custom Function from File 2', ()=>{

    // TEST - 1
    test('My first test case', ()=>{})

    // TEST - 2
    test('My second test case', ()=>{})

    // TEST - 3
    test('My third test case', ()=>{})

})

// suite - 3
describe('Testing My Custom Function from File 3', ()=>{

    // TEST - 1
    test('My first test case', ()=>{})

    // TEST - 2
    test('My second test case', ()=>{})

    // TEST - 3
    test('My third test case', ()=>{})

})
