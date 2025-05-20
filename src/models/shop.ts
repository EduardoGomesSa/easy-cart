import { Item } from "./item";

export class Shop {
    constructor(
        public id: number,
        public title: string,
        public price: string,
        public date: string,
        public items: Item[]
    ) { }
}