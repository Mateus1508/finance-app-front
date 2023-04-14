import React from 'react';
import * as C from './styles';

type Item = {
    date: Date;
    category: string;
    title: string;
    value: number;
}

const InsertItem = () => {
    const [newItem, setNewItem] = React.useState<Item[]>(
        [{ 
            date: new Date(), 
            title: '', 
            category: '', 
            value: 0,
        }]);

    const handleAddItem = () => {
        localStorage.setItem("Item", newItem.toString());
    }

    return ( 
        <C.Container>
            
            <input 
                type='text' 
                placeholder='Ex: Salário'
                onChange={e => setNewItem([{ ...newItem[1], title: e.target.value }])}
            />

            <select onChange={e => setNewItem([{ ...newItem[2], category: e.target.value }])}>
                <option>Selecione</option>
            </select>
            
            <input 
            type='number'
            onChange={e => setNewItem([{ ...newItem[3], value: Number(e.target.value) }])}
            />

            <button onClick={handleAddItem}>Adicionar</button>
        </C.Container>
     );
}
 
export default InsertItem;