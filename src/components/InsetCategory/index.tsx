import React from 'react';
import * as C from './styles';
import axios from 'axios';
import { baseUrl } from '../../services/api';

const InsertCategory = () => {
    const [title, setTitle] = React.useState('');
    const [color, setColor] = React.useState('#000000');
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

        <C.InputBox>
            <label htmlFor="">Título</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </C.InputBox>
  
        <C.InputBox>
            <label htmlFor="">Cor</label>
            <input type="color"
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
            />
        </C.InputBox>
        
        <C.InputBox>
            <label htmlFor="">{expense ? "É uma ": "Não é uma "}despesa 
              <input type="checkbox" 
                  value={'true'} 
                  onChange={handleExpenseCheckbox}
                  checked={expense}
              />
            </label>
        </C.InputBox>

        <button onClick={handleAddCategory}>Adicionar</button>
      </C.Container>
    );
  };
 
export default InsertCategory;