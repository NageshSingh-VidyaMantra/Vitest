import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { getRandomId } from '../../4 setup And TearDown/random'
import fetch from "node-fetch";

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

// One time setup
describe.skip(' Testing - Fetch random user Data . . . ', ()=>{
    
    let userData = null;
    let userId = getRandomId();

    beforeAll(async ()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        userData = await response.json();
        console.log(`User Data Fetched for userId ${userId}.`)
    })

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