const url = $request.url
const redirect = url.replace(/^https:\/\/d\.bilibili\.com\/bi-li-bi-li-dong-hua\?.*&schema=/, "")
$done({
    response: {
        headers: {
            Location: decodeURIComponent(redirect)
        },
        status: 302
    }
})