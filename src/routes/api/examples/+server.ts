const apiUrl:string = 'https://goat.mindlabs.dev/v1/examples'

/** @type {import('./$types').RequestHandler} */
export async function GET(request: Request) {
	let response : Response = await fetch(apiUrl,{
            headers: {
                Accept: 'application/json'
            }
        }
    )
	if (!response.ok) {
        console.log("error")
        response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'"}',{ 
            headers: {
                    'content-type': 'application/json'
            }
        })   
	}

    return response
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request } : any) {
	let response : Response = await fetch(apiUrl,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: request.body
    })
	if (!response.ok) {
        console.log("error")
        response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'"}',{ 
        headers: {
                'content-type': 'application/json'
            }
        })   
	}

    // const data = await response.json();
    // console.log(data)

    return response
}
