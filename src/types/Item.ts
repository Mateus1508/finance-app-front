import { Category } from "./Category";

export type Item = {
    id: number;
    date: Date;
    title: string;
    value: number;
    categoryId: number;
    categories?: Category;
}