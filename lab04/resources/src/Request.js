export class Request {

    constructor() {
        this.baseUrl = "https://glo3102lab4.herokuapp.com";
        this.mode = "cors";
        this.cache = "no-cache";
        this.headers = {
            "Content-Type" : "application/json; charset=utf-8"
        };
        this.referrer = "no-referrer";
    }

    post(url, data) {
       return fetch(this.baseUrl + url, {
            method: "POST",
            mode: this.mode,
            cache: this.cache,
            headers: this.headers,
            referrer: this.referrer,
            body: JSON.stringify(data),
        }).then(res => res.json())
    }

    get(url) {
        return fetch(this.baseUrl + url, {
            method: "GET",
            mode: this.mode,
            cache: this.cache,
            headers: this.headers,
            referrer: this.referrer,
        }).then(res => res.json())
    }

    remove(url) {
            return fetch(this.baseUrl + url, {
                method: "DELETE",
                mode: this.mode,
                cache: this.cache,
                headers: this.headers,
                referrer: this.referrer,
            });
        }

    put(url, data) {
        return fetch(this.baseUrl + url, {
            method: "PUT",
            mode: this.mode,
            cache: this.cache,
            headers: this.headers,
            referrer: this.referrer,
            body: JSON.stringify(data),
        });
    }
}