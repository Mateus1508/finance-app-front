import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import { Category } from '../../types/Category';

type Props = {
    itemList: Item[];
    categoriesList: Category[];
}

export const TableArea = ({ itemList, categoriesList }: Props) => {

    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                    {itemList.map((item, index) => (
                       <TableItem key={index} item={item} categories={categoriesList}/>
                    ))}
            </tbody>
        </C.Table>
    )
}