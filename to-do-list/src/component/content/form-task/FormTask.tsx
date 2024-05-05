import React, { useState, ChangeEvent } from "react"; 
import { FieldText } from "../field-text"; 
import { TaskProps } from "../list-task";
import style from './form-task.module.css'
import { Button } from "../buttom";

interface FormTaskProps {
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

const FormTask: React.FC<FormTaskProps> = ({ setTasks }) => {
    const [nameTask, setNameTask] = useState<string>("");
    
    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!nameTask.trim()) { 
            return;
        }
        setTasks(prevTasks => [...prevTasks, { id: prevTasks.length + 1, nome: nameTask }] as TaskProps[]);
        setNameTask("");
    };
    

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNameTask(event.target.value);
    };

    return (
        <form className={style.FormTask} onSubmit={addTask}>
            <FieldText value={nameTask} onChange={handleNameChange} />
            <Button text={"+"} />
        </form>
    );
}

export { FormTask };
