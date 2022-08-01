const url = 'http://localhost:8080/v1/tests'

export async function GET(request: any ) {
    const r = await fetch(url, {
        headers: {
            Accept: 'application/json',
        }
    });
    let data : any = [];

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

export async function POST(request: any) {
    const r = await fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
        },
        body: request.body
    });

    let data : any = [];

    if (r.status === 200) {
        console.log(r.statusText)
        data = await r.json();
    } else {
        console.log(r.statusText)
        //throw new Error(r.statusText);
    }
    
    console.log(data);

    return {
        body: {
            data
        }
    }
}
