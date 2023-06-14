import fetch from "node-fetch";

/**
* This function returns
* @param {url} string - data to be fetched from this URL 
*/
export async function fetchTodos(url: string) {
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('404 : NOT Found x_x')
        }
        return await response.json();
    }catch(error: any){
        return error.message
    }
}