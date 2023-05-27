import { Category } from "./Category";

export type Item = {
    date: Date;
    title: string;
    value: number;
    categoryId: number;
    categories?: Category;
}