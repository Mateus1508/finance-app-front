import * as React from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import InsertItem from './components/InsertItem';
import { baseUrl } from './services/api';
import { Category } from './types/Category';
import axios from 'axios';
import InsertCategory from './components/InsetCategory';

const App = () => {
  const [filteredList, setFilteredList] = React.useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());
  const [income, setIncome] = React.useState(0);
  const [expense, setExpense] = React.useState(0);
  const [listItem, setListItem] = React.useState<Item[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  React.useEffect(() => {
    axios
    .get(`${baseUrl}/item`)
    .then((response: { data: React.SetStateAction<Item[]>; }) => setListItem(response.data))
    .catch((err: string) => {
      console.error("ops! ocorreu um erro" + err);
    });
    axios
    .get(`${baseUrl}/category`)
    .then((response: { data: React.SetStateAction<Category[]>; }) => setCategories(response.data))
    .catch((err: string) => {
      console.error("ops! ocorreu um erro" + err);
      });
    }, [listItem, categories]);
  React.useEffect(() => {
    setFilteredList(filterListByMonth(listItem, currentMonth));
  },[listItem,currentMonth]);
  React.useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(!categories[i].expense) {
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
        <InsertCategory />
        <InsertItem categoriesList={categories} />
        <C.Table>
          <InfoArea 
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
            />
          <TableArea itemList={filteredList} categoriesList={categories} />
        </C.Table>
      </C.Body>
    </C.Container>
  );
}

export default App;
