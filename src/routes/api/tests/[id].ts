export async function GET({ params } : any) {
    const url = 'http://localhost:8080/v1/tests/' + params.id
    //console.log(params.id)
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

    // console.log(data);

    return {
        body: {
            data
        }
    }
}