import React from 'react';
import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as C from './styles';
import { Category } from '../../types/Category';
import { AiTwotoneDelete } from 'react-icons/ai';
import axios from 'axios';
import { baseUrl } from '../../services/api';

type Props = {
    item: Item;
    categories: Category[];
}

export const TableItem = ({ item, categories }: Props) => {
    const newCategoriesList = categories.filter((category) => category.id === item.categoryId); 

    const handleSaveId = (id: number) => {
        return localStorage.setItem('idUser', id.toString());
    }

    const handleDeleteId = (id: number, title: string) => {
        axios
    .delete(`${baseUrl}/item/${id}`)
    .then(() => alert(`Item ${title} deletado com sucesso`))
    .catch((err: string) => {
        alert("ops! ocorreu um erro" + err);
    });
    }

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={newCategoriesList[0]?.color}>
                    {newCategoriesList[0]?.title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value expense={newCategoriesList[0]?.expense ? 'red' : 'green'}>
                    R$ {item.value.toFixed(2)}
                </C.Value>
            </C.TableColumn>
            <C.TableColumnIcon>
                <button onClick={() => handleDeleteId(item.id, item.title)}>
                    <AiTwotoneDelete color='red' size={28} />
                </button>
            </C.TableColumnIcon>
        </C.TableLine>
    );
}
