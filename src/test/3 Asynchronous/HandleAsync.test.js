import { describe, expect } from 'vitest'
import { fetchTodos } from '../../3 Asynchronous/fetchTodo'

describe('Testing asynchronous functions', ()=>{
    test('successful res', async ()=>{

        let fetchId = 1; // Id can be between 1 to 100
        
        // Below url give us some dummy todo data based on id.
        const fetchedTodo = await fetchTodos(`https://jsonplaceholder.typicode.com/todos/${fetchId}`);
        
        // Type of 'fetchedTodo' fetched from fetchTodos,  

        /*
        fetchedTodo = {
           userId: number;
           id: number;
           title: string;
           completed:  boolean;
        }
        */
        
        // As fetchedTodo contain dynamic data we can check these following . . .
        expect(fetchedTodo).toBeDefined() // PASS - as it is defined
        expect(fetchedTodo).toHaveProperty('userId') // PASS - as it have this property
        expect(fetchedTodo).toHaveProperty('id') // PASS - as it have this property
        expect(fetchedTodo).toHaveProperty('title') // PASS - as it have this property
        expect(fetchedTodo).toHaveProperty('completed') // PASS - as it have this property
    })

    test('failed response', async ()=>{

        // Below url give us ERROR 404 : NOT FOund.
        const fetchedTodo = await fetchTodos('https://www.google.com/randompath');
        expect(fetchedTodo).toMatch(/404/) // PASS - toMatch work as a regex
        expect(fetchedTodo).toMatch('404') // PASS - toMatch work as a regex
        expect(fetchedTodo).toBe('404 : NOT Found x_x') // PASS - match the exact error message      
    })
})