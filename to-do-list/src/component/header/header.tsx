

import { Link } from 'react-router-dom';
import style from './header.module.css'
export interface User  {
    name: string
}

const  Header  = ()=>{
   
    return(
        <div className={style.Header}>
            <Link to="">
            <h1>
                ToDo 
                <span>List</span>
            </h1>
            </Link>

            <Link to="/about">
            Sobre nós
            </Link>
        </div>
    );
};

export {Header};