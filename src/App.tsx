import * as React from 'react';
import * as C from './App.styles';
import { categories } from './data/categories';
import { items } from './data/items';
import { Item } from './types/Item';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import InsertItem from './components/InsertItem';

const App = () => {
 /*  const [list, setList] = useState(items); */
  const [filteredList, setFilteredList] = React.useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());
  const [income, setIncome] = React.useState(0)
  const [expense, setExpense] = React.useState(0)
  const list = items;

  React.useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  },[list,currentMonth]);

  React.useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      }
      else {
        incomeCount += filteredList[i].value;
      }
    }
    
      setIncome(incomeCount);
      setExpense(expenseCount);
  },[filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>  
        
        <InsertItem />

        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
          />
        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;
