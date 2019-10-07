import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServicesService {

  constructor(private http: HttpClient) {
  }

  getData(param: string) {
    return this.http.get('https://api.github.com/search/repositories' + '?q=' + param + '&sort=stars&order=desc');
  }
}
