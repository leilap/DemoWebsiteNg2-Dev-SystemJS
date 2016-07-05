import { Component, OnInit} from "@angular/core";
import { TopMenuItem} from "./top-menu.model";
import { TopMenuService} from "./top-menu.service";

@Component({
    selector: "<nav>",
    templateUrl: './src/app/top-menu/top-menu.component.html',
    providers: [TopMenuService]
})
export class TopMenuComponent implements OnInit{
    errorMessage: string;
    topMenuItems: TopMenuItem[];
    show: boolean = false;
    constructor(private topMenuService: TopMenuService) { }
    
    getNavigationBoxes() {
       this.topMenuService.getMenuItems()
            .subscribe(response => this.topMenuItems = response,
            error => this.errorMessage = <any>error
            );
    };
    
       ngOnInit() {
        this.getNavigationBoxes();
    };
    displayMenuForMobile(){
        this.show = !this.show
    }
   
}