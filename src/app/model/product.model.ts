export class Product {
    constructor(
        
        public _id?: string,
        public image?: string,
        public condition?: string,
        public title?: string,
        public category: string = "",
        public description?: string,
        public phoneNumber?: number,
        public price: number = 0) {}
    
}