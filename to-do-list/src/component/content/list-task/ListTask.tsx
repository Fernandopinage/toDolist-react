import { ListItem } from "./list-item"
import style from './list-task.module.css'
const ListTask = ()=>{
    const task = [
        {id:1,nome:'item 01'},
        {id:2,nome:'item 02'},
        {id:3,nome:'item 03'},
    ];
    return(
        <ul className={style.ListTask}>
            {task.map(item=><ListItem key={item.id} name={item.nome} />)}
        </ul>
    )
}
export {ListTask}