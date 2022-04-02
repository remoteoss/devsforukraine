export const api = {
    post: ({ url, body }: { url: string, body: {} }) => fetch(`api/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...body
        }),
    }).then((res) => res.json()),
    get: ({ url }: { url: string }) => fetch(`api/${url}`).then((res) => res.json())
}