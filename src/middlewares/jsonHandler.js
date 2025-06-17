export async function jsonHandler(request, response) {
    const buffers = []

    for await (const chunk of request) {
        buffers.push(chunk)

    }
    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        response.body = null
    }
    response.setHeader("Content-type", "aplication/json")
}