import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseDto } from '../dtos/api-response-dto';
import { FrameworkDto } from '../dtos/framework-dto';
import { ApiUrlModel, ApiUrlOptions } from '../model/api-url.model';

@Injectable({
  providedIn: 'root'
})
export class FramworksDataRequestService {
  apiURL = "https://api.github.com/search/repositories"
  headers: HttpHeaders = new HttpHeaders({
    " X-RateLimit-Limit": "60",
    "X-RateLimit-Remaining": "56",
    "X-RateLimit-Reset": "1372700873"
  })
  oDataOptionsDefault: ApiUrlOptions = { count: 10 };
  constructor(private http: HttpClient) {

  }
  getList(searchFilter?: string, language?: string, numberItems?: number): Observable<APIResponseDto> {
    //OPTIONS FOR QUERY BY ODATA
    let oDataOptions = Object.assign({}, this.oDataOptionsDefault);
    oDataOptions.framework = searchFilter;
    oDataOptions.language = language;
    numberItems ? oDataOptions.count = numberItems : undefined;

    //RETURN OBSERVABLE OF LIST
    return this.http.get<APIResponseDto>(new ApiUrlModel(this.apiURL, oDataOptions).ODataUrl());
  }
}
