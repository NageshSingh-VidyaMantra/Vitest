import { describe } from 'vitest'
import fetch from "node-fetch";

describe.only('Testing asynchronous functions', ()=>{
    it.skip('successful res', async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const responseJSON = await response.json();
        expect(responseJSON).toEqual( 
            { 
              userId: 1,
              id: 1,
              title: 'delectus aut autem',
              completed: false 
            })
    })

    it('failed response', async ()=>{
        try{
            const response = await fetch('https://www.google.com/randompath')
            if(!response.ok) throw {
                status: response.status,
                statusText: response.statusText
            }
        }catch(e){
            expect(e).toEqual({ status: 404, statusText: 'Not Found' })
        }
    })
})