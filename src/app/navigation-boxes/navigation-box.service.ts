import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
import { NavigationBox } from './navigation-box.model';

@Injectable()
export class NavigationBoxService {
    apiUrl = "./src/app/navigation-boxes/navigation-box-data.json";
    constructor(private http: Http){
     };
     
    getNavigationBoxes() {
    return this.http.get(this.apiUrl)
      .map((responseData) => {
        return responseData.json().data;
      })
      .map((navBoxes: Array<any>) => {
        let result:Array<NavigationBox> = [];
        if(navBoxes){
          navBoxes.forEach((navBox) => {
            result.push(new NavigationBox(navBox.linkDescription, 
                                          navBox.linkText, 
                                          navBox.linkUrl))
          });
        }
        return result;
      })
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}