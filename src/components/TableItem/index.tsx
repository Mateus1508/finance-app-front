import React from 'react';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';
import { Category } from '../../types/Category';

type Props = {
    item: Item;
    categories: Category[];
}

export const TableItem = ({ item, categories }: Props) => {
    const newCategoriesList = categories.filter((category) => category.id === item.categoryId); 

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={newCategoriesList[0].color}>
                    {newCategoriesList[0].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value expense={newCategoriesList[0].expense ? 'red' : 'green'}>
                    R$ {item.value.toFixed(2)}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}
