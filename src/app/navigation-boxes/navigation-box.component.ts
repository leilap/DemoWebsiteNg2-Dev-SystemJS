import { Component, OnInit } from '@angular/core';
import { NavigationBox } from './navigation-box.model';
import { NavigationBoxService } from './navigation-box.service';

@Component({
    selector: '<navigation-boxes>',
    templateUrl: './src/app/navigation-boxes/navigation-box.component.html',
    providers: [NavigationBoxService]
})

export class NavigationBoxComponent implements OnInit {
    errorMessage: string;
    navigationBoxes: NavigationBox[];
    constructor(private navigationBoxService: NavigationBoxService) { }
    
    getNavigationBoxes() {
        this.navigationBoxService.getNavigationBoxes()
            .subscribe(response => this.navigationBoxes = response,
            error => this.errorMessage = <any>error
            );
    };
    isCollapsed(navBox: NavigationBox) {
        return navBox.isHidden;
    };
    isHovered(navBox: NavigationBox) {
        return navBox.isHovered;
    };
    mouseEventFunc(navBox: NavigationBox) {
        navBox.isHovered = !navBox.isHovered;
        return navBox.isHovered;
    };
    ngOnInit() {
        this.getNavigationBoxes();
    };
    
    toggle(navBox: NavigationBox, repeaterIndex: number) {
        navBox.isHidden = !navBox.isHidden;
        this.navigationBoxes.forEach(function (item, i) {
            if( repeaterIndex != i )
            {
                item.isHidden = true;
            }
        })
    };

}

