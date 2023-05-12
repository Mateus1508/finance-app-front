import React from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
    addItem: (item: Item) => void;
}

const InsertItem = ({ addItem }: Props) => {
    const [title, setTitle] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [value, setValue] = React.useState(0);
    const [date, setDate] = React.useState('');
    
    const handleAddItem = () => {
        addItem({
            date: newDateAdjusted(date),
            title: title,
            category: category,
            value: value,
        });
        setTitle('');
        setCategory('');
        setValue(0);
    };

    return (
      <C.Container>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
       
        <input
          type="text"
          placeholder="Ex: Salário"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione</option>
          <option value="food">Alimentação</option>
          <option value="rent">Aluguel</option>
          <option value="salary">Salário</option>
        </select>
  
        <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
  
        <button onClick={handleAddItem}>Adicionar</button>
      </C.Container>
    );
  };
 
export default InsertItem;