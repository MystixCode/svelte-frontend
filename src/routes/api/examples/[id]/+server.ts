const apiUrl:string = 'http://localhost:8080/v1/examples'

/** @type {import('./$types').RequestHandler} */
export async function GET({params}: any) {
    const url:string = apiUrl+'/'+params.id
	let response = await fetch(url,{
        headers: {
            Accept: 'application/json'
        }
    })
    if (!response.ok) {
        console.log("error")
        console.log(response.status)
        console.log(response.headers)
        console.log(response.type)
        console.log(response.url)
        let data = await response.json()

        response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'", "data": '+JSON.stringify(data)+'}',{
        // response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'"}',{ 
            headers: {
                'content-type': 'application/json'
            }
        }) 
	}
    return response
};

/** @type {import('./$types').RequestHandler} */
export async function DELETE({params}: any) {
    const url:string = apiUrl+'/'+params.id
	let response = await fetch(url,{
        method: "DELETE",
        headers: {
            Accept: 'application/json'
        }
    })
    if (!response.ok) {
        console.log("error")
        console.log(response.status)
        console.log(response.headers)
        console.log(response.type)
        console.log(response.url)
        let data = await response.json()
        // response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'"}',{ 
        response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'", "data": '+JSON.stringify(data)+'}',{
            headers: {
                'content-type': 'application/json'
            }
        })
	}
    return response
}

/** @type {import('./$types').RequestHandler} */
export async function PUT({params, request}: any) {
    const url:string = apiUrl+'/'+params.id
	let response = await fetch(url,{
        method: "PUT",
        headers: {
            Accept: 'application/json',
        },
        body: request.body
    })
    if (!response.ok) {
        console.log("error")
        console.log(response.status)
        console.log(response.headers)
        console.log(response.type)
        console.log(response.url)
        let data = await response.json()
        // response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'"}',{ 
        response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'", "data": '+JSON.stringify(data)+'}',{
            headers: {
                'content-type': 'application/json'
            }
        })   
	}
    return response
}
