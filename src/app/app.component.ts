import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly requestedDate = '2021-6-20';

  public roverPictures: any;
  public roverPicturesObs: Observable<any[]>;
  public roverPicturesObs2: Observable<any[]>;

  constructor(private readonly dataService: DataService) {}

  getPictures(): void {
    // 5) Create a new function in the data service called "getUrlsFromRoverPictures" that calls the same api and returns only the urls to display the pictures. Have the getPictures() method in the component invoke this new function to use the strings to display the pictures on the page.

    //task 4
    this.roverPicturesObs = this.dataService.getPictures(this.requestedDate);

    //task 3)
    // Change the application so that only the first 3 images that come back from the api response display on the page.

    // this.dataService.getPictures(this.requestedDate).subscribe((data) => {
    //   this.roverPictures = data;
    //   this.roverPictures = this.roverPictures.photos.slice(0, 3);
    // });
  }

  //duplicated function for task two
  getPictures2(): void {
    this.roverPicturesObs2 = this.dataService
      .getUrlsFromRoverPictures(this.requestedDate)
      .pipe(
        map((urls) =>
          urls.map((url) => {
            return { img_src: url };
          })
        )
      );
  }
}
