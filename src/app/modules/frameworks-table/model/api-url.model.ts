import { UrlResolver } from "@angular/compiler";

//Modelo para crear de forma sencilla la URL
export class ApiUrlModel {
    url: string;
    urlOptions: ApiUrlOptions;
    constructor(url: string, oDataOptions?: ApiUrlOptions) {
        this.url = url;
        this.urlOptions = oDataOptions;

    }
    ODataUrl() {
        let finalUrl: string = this.url;
        if (this.urlOptions) {
            finalUrl += '?q=';
            if (this.urlOptions.framework) {
                finalUrl += this.urlOptions.framework;
            } else {
                finalUrl += "framework";
            }
            if (this.urlOptions.language) {
                finalUrl += encodeURIComponent(`+language:${this.urlOptions.language}`);
            } else {
                finalUrl += encodeURIComponent(`+language:javascript`);
            }
            if (this.urlOptions.count) {
                finalUrl += `&page=1&per_page=${this.urlOptions.count}`;
            } else {
                finalUrl += `&page=1&per_page=10`;
            }
        } else {
            finalUrl += `?framework${encodeURIComponent('+language:javascript')}&page=1&per_page=10&sort=stars&order=desc`
        }

        return finalUrl;
    }
}
//Opcienes para crear la URl
export interface ApiUrlOptions {
    count?: number,
    framework?: string;
    language?: string
}