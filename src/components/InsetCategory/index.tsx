import React from 'react';
import * as C from './styles';
import axios from 'axios';
import { baseUrl } from '../../services/api';

const InsertCategory = () => {
    const [title, setTitle] = React.useState('');
    const [color, setColor] = React.useState('');
    const [expense, setExpense] = React.useState(false);
    
    const handleAddCategory = async () => {
      await axios
      .post(`${baseUrl}/category`, {
        "title": title,
        "color": color,
        "expense": false,
      })
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    const handleExpenseCheckbox = () => {
        setExpense(!expense);
    }

    return (
      <C.Container>
        <h2>Adicionar categoria</h2>

        <div>
            <label htmlFor="">Título</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
  
        <div>
            <label htmlFor="">Cor</label>
            <input type="color"
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
            />
        </div>
        
        <div>
            <label htmlFor="">É uma despesa?</label>
            <label htmlFor="">{expense ? "Sim": "Não"}</label>
            <input type="checkbox" 
                value={'true'} 
                onChange={handleExpenseCheckbox}
                checked={expense}
            />
        </div>

        <button onClick={handleAddCategory}></button>
      </C.Container>
    );
  };
 
export default InsertCategory;