import { ListItem } from "./list-item"
import style from './list-task.module.css'

export type TaskProps = {
    id: number;
    nome: string;
}

export interface ListTaskProps {
    tasks: TaskProps[];
}

const ListTask = (props: ListTaskProps) => {
    const { tasks } = props;
    console.log('>>>>',tasks)
    return (
        <ul className={style.ListTask}>
            {tasks.map(item => <ListItem key={item.id} name={item.nome} />)}
        </ul>
    )
}

export { ListTask }