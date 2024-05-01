
import style from './header.module.css'
export interface User  {
    name: string
}

const  Header  = ()=>{
   
    return(
        <div className={style.Header}>
            <h1>
           ToDo 
           <span>List</span>
            </h1>
        </div>
    );
};

export {Header};