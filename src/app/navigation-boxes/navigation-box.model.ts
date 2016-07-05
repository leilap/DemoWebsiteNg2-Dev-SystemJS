export class NavigationBox{
    isHidden: boolean;
    isHovered: boolean;
    linkDescription: string;
    linkText: string;
    linkUrl: string;
        
    constructor(linkDescription: string, linkText: string, linkUrl:string)
    {
        this.isHidden = true;
        this.isHovered = false;
        this.linkDescription = linkDescription;
        this.linkText = linkText;
        this.linkUrl = linkUrl;
    }
    public displayShortDescription(description: string, length: number){
        var trimmedString: string = description.substring(0, length) + "...";
        return trimmedString;
    }
}