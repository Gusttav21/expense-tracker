import * as C from "./style";
import { Item } from "../../types/Item";
import { TableItem} from '../TableItem'
type Props = {
    list: Item[]
}
export const TableArea = ({list}:Props) =>{
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={'15%'}>Date</C.TableHeadColumn>
                    <C.TableHeadColumn width={'15%'}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn width={'50%'}>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={'20%'}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                  <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </C.Table>
    );
}