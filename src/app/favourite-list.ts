export class FavouriteList {
    id!: number;
    userName!: string;
    courseId!: number;
    topicName!: string;
    platformName!: string;
    price!: number;
    affiliateLink!: string;
    description!: string;
    imagePath!: string;
    rating!: string;

    constructor(userName: string,courseId:number,topicName:string,platformName:string,price:number,affiliateLink:string,desc:string,imagePath:string,rating:string){

        this.userName = userName;
        this.courseId = courseId;
        this.topicName = topicName;
        this.platformName = platformName;
        this.price = price;
        this.affiliateLink = affiliateLink;
        this.description = desc;
        this.imagePath = imagePath;
        this.rating = rating;

    }
}
