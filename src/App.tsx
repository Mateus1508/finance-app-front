import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { categories } from './data/categories';
import { items } from './data/items';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () => {
 /*  const [list, setList] = useState(items); */
  const [filteredList, setFilteredList] = useState<Item[]>([]);
 /*  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth); */
  const currentMonth = getCurrentMonth();
  const list = items;
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  },[list,currentMonth]);
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>  
        

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;
