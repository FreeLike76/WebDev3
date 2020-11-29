const server_url = "https://my-json-server.typicode.com/FreeLike76/kpi_web_3_server/menu"

function sendRequest(url){
    return fetch(url).then(response=>{
        return response.json()
    })
}

export const productPromise = sendRequest(server_url)