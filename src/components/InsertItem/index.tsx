import React from 'react';
import * as C from './styles';
import axios from 'axios';
import { baseUrl } from '../../services/api';
import { Category } from '../../types/Category';

type Props = {
  categoriesList: Category[];
}

const InsertItem = ({categoriesList}: Props) => {
    const [title, setTitle] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [value, setValue] = React.useState(0);
    const [date, setDate] = React.useState('');
    
    const handleAddItem = async () => {
      await axios
      .post(`${baseUrl}/item`, {
        "title": title,
        "value": value,
        "date": date,
        "categoryId": category,
      })
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    return (
      <C.Container>
        <h2>Adicionar item</h2>
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
          {
            categoriesList.map((item) => {
              return (
                <option key={item.id} value={item.id}>{item.title}</option>
              )
            })
          }
        </select>
  
        <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
  
        <button onClick={handleAddItem}>Adicionar</button>
      </C.Container>
    );
  };
 
export default InsertItem;