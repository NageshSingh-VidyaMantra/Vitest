import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { getRandomId } from '../../4 setup And TearDown/random'
import fetch from "node-fetch";

/*
   One time setup
   Some times it is required to execute some function or setup some data before all the test run,
   similarly to execute some function after the test is completed ...
   
   E.g : 
   -> Fetch Data from Database and store it.
   -> Flush stored data and so on . . . 

   In such cases we can use hooks like
   -> beforeAll - this function executes once before resolving any test
   -> afterAll - this function executes once after test are resolved
*/

describe.skip(' Testing - Fetch random user Data . . . ', ()=>{
    
    let userData = null;
    let userId = getRandomId(); // This function give us random Id between 0 to 100 

    // It will execute once, before all test
    beforeAll(async ()=>{
        // Here we are fetching some random user data before each test
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        userData = await response.json();
        console.log(`User Data Fetched for userId ${userId}.`)
    })

    // It will execute once, after all test
    afterAll(()=>{
        console.log(`All Test resolved for userId ${userId}.`)
    })

    test('Test - get user data based on userId', ()=>{
        expect(userData.id).toEqual(userId)
    })

    test('Test - Fetched data should have defined title', ()=>{
        expect(userData.title).toBeDefined()
    })

    test('Test - Fetched data should have defined body', ()=>{
        expect(userData.body).toBeDefined()
    })
})


/*
  Some time it is required to execute function before or after each test.
  
  In that case we can use hooks like
  -> beforeEach()
  -> afterEach()
*/
describe(' Testing - Fetch random user Data . . . ', ()=>{
    
    let userData = null;
    let userId = null;

    beforeEach(async ()=>{
        userId = getRandomId();
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        userData = await response.json();
        console.log(`User Data Fetched for userId ${userId}.`)
    })

    afterEach(()=>{
        console.log(`Test resolved for userId ${userId}`)
    })

    test('Test - get user data based on userId', ()=>{
        expect(userData.id).toEqual(userId)
    })

    test('Test - get user data based on userId', ()=>{
        expect(userData.id).toEqual(userId)
    })

    test('Test - get user data based on userId', ()=>{
        expect(userData.id).toEqual(userId)
    })
})