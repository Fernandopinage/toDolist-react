import { useState } from "react";
import { FormTask, ListTask, TaskProps } from "../../component";
import style from './home.module.css'

const Home = () => {

    const [tasks, setTasks] = useState<TaskProps[]>([
        { id: 1, nome: 'item 01' },
        { id: 2, nome: 'item 02' },
        { id: 3, nome: 'item 03' },
    ]);

    return (
        <div className={style.Home}>
            <FormTask setTasks={setTasks} />
            <ListTask tasks={tasks} />
        </div>
    );
}

export { Home }
