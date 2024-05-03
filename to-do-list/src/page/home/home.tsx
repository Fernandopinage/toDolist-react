import { FormTask, ListTask } from "../../component";
import style from './home.module.css'

const Home = ()=>{
    return(
        <div className={style.Home}>
        <FormTask />
        <ListTask />
        </div>
    );
}

export {Home}