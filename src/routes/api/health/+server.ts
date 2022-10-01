const apiUrl:string = 'http://localhost:8080/v1/health'

/** @type {import('./$types').RequestHandler} */
export async function GET(request: Request) {
    let response = await fetch(apiUrl,{
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
        // response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'"}',{ 
        response = new Response('{"status": '+response.status+',"message": "'+response.statusText+'"}',{
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    return response;
}
