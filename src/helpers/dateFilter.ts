import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');
    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth()) === parseInt(month)
            )
            {
                newList.push(list[i]);
            }
        }
        return newList;
    }
    
    export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    
    return `${addZeroToDate(day)}/${month}/${year}`;
}
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');

    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month)]} de ${year}`;
}

export const newDateAdjusted = (date: string) => {
    let [year, month, day] = date.split('-')
    return new Date(parseInt(year), parseInt(month), parseInt(day))
  }