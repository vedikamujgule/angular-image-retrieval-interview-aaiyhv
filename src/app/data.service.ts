import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey } from './environment';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  public getPictures(date: string): Observable<any[]> {
    const url =
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' +
      date +
      '&api_key=' +
      apiKey;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.photos;
      })
    );
  }

  //task 5
  public getUrlsFromRoverPictures(date: string): Observable<string[]> {
    const url =
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' +
      date +
      '&api_key=' +
      apiKey;
    return this.http.get<any>(url).pipe(
      map((response) => {
        const urls = response.photos.map((photo) => photo.img_src);
        return urls;
      })
    );
  }
}
