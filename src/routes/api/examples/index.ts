import type { JSONValue } from "@sveltejs/kit/types/private";

const url = 'http://localhost:8080/v1/examples'

export async function GET(request: Request) {
    const r = await fetch(url, {
        headers: {
            Accept: 'application/json',
        }
    });
    let data : JSONValue = [];

    if (r.status === 200) {
        console.log(r.statusText)
        data = await r.json();
    } else {
        console.log(r.statusText)
        //throw new Error(r.statusText);
    }

    return {
        body: {
            data
        }
    }
}

///** @type {import('./__types/items').RequestHandler} */
export async function POST({ request } : any) {

    const r = await fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
        },
        body: request.body
    });
    // console.log(r)
    let data : any = [];
    data = await r.json();
    if (r.status === 201) {
        console.log(r.status)
        
    } else {
        console.log(r.status)
        //throw new Error(r.statusText);
    }
    
    //console.log(data);

    return {
        body: {
            data
        }
    }
}
