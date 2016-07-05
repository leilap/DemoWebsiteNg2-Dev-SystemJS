import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
import { TopMenuItem } from './top-menu.model';

@Injectable()
export class TopMenuService {
    apiUrl = "./src/app/top-menu/top-menu-data.json";
   constructor(private http: Http) {
    };
    
     
    getMenuItems() {
        return this.http.get(this.apiUrl)
            .map((responseData) => {
                return responseData.json().data;
            })
            .map((menuItems: Array<any>) => {
                let results: Array<TopMenuItem> = [];
                if (menuItems) {
                    menuItems.forEach((item) => {
                        results.push(new TopMenuItem(
                            item.title,
                            item.linkUrl
                        ))
                    })
                };
                return results;
            })
            .catch(this.handleError)
    };
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    };
}
