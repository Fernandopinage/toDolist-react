import { Button } from "../buttom";
import { FieldText } from "../field-text";
import style from './form-task.module.css'

const FormTask = ()=>{
    return(
       <form className={style.FormTask}>
        <FieldText />
        <Button text={"+"}  />
       </form>
    );
}

export {FormTask}