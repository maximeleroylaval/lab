export class Request {

    static post(url, data) {
       return fetch(Request.baseUrl + url, {
            method: "POST",
            mode: Request.mode,
            cache: Request.cache,
            headers: Request.headers,
            referrer: Request.referrer,
            body: JSON.stringify(data),
        }).then(res => res.json())
    }

    static get(url) {
        return fetch(Request.baseUrl + url, {
            method: "GET",
            mode: Request.mode,
            cache: Request.cache,
            headers: Request.headers,
            referrer: Request.referrer,
        }).then(res => res.json())
    }

    static remove(url) {
            return fetch(Request.baseUrl + url, {
                method: "DELETE",
                mode: Request.mode,
                cache: Request.cache,
                headers: Request.headers,
                referrer: Request.referrer,
            });
        }

    static put(url, data) {
        return fetch(Request.baseUrl + url, {
            method: "PUT",
            mode: Request.mode,
            cache: Request.cache,
            headers: Request.headers,
            referrer: Request.referrer,
            body: JSON.stringify(data),
        });
    }
}

//static var
Request.baseUrl = "http://localhost:1337";
Request.mode = "cors";
Request.cache = "no-cache";
Request.headers = {
    "Content-Type" : "application/json; charset=utf-8"
};
Request.referrer = "no-referrer";