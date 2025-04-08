import { baseUrl, eventQuantity } from "/src/scripts/variables.js"

async function getEvents(userName){
    const reponse = await fetch(`${baseUrl}/${userName}/events?per_page=${eventQuantity}`)
    return await reponse.json()
}

export { getEvents } 