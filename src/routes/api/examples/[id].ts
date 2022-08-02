import type { GetParams } from "@sveltejs/kit/types/internal";
import type { JSONObject, JSONValue } from "@sveltejs/kit/types/private";

export async function GET({ params } : any) {
    const url = 'http://localhost:8080/v1/examples/' + params.id
    //console.log(params.id)
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

    // console.log(data);

    return {
        body: {
            data
        }
    }
}

export async function PUT({ params, request } : any) {
    // console.log(params)
    const url = 'http://localhost:8080/v1/examples/' + params.id
    //console.log(params.id)
    const r = await fetch(url, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
        },
        body: request.body
    });

    let data : JSONValue = [];

    if (r.status === 200) {
        console.log(r.statusText)
        data = await r.json();
    } else {
        console.log(r.statusText)
        //throw new Error(r.statusText);
    }

    // console.log(data);

    return {
        body: {
            data
        }
    }
}

export async function DELETE({ params } : any) {
    // console.log(params)
    const url = 'http://localhost:8080/v1/examples/' + params.id
    //console.log(params.id)
    const r = await fetch(url, {
        method: "DELETE",
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

    // console.log(data);

    return {
        body: {
            data
        }
    }
}
