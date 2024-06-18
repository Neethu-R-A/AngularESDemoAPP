import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareserviceService {
  constructor(private http: HttpClient) {}

  baseApiUrl = 'http://localhost:8080';

  getData(str: string) {
    return this.http.get(this.baseApiUrl + '/main/' + str);
  }

  getMatchesWon(endpoint: string, params: any = {}): Observable<any> {
    const url = `${this.baseApiUrl}/main/${endpoint}`;
    const httpParams = new HttpParams({ fromObject: params });

    return this.http.get(url, { params: httpParams });
  }

  getMatchesBySeason(endpoint: string, params: any = {}): Observable<any> {
    const url = `${this.baseApiUrl}/main/${endpoint}`;
    const httpParams = new HttpParams({ fromObject: params });

    return this.http.get(url, { params: httpParams });
  }
}
