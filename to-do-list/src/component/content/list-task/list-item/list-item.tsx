import { Button } from "../../buttom"
import style from './list-item.module.css'

interface ListItemProps {
    name:string
}

const ListItem = (props:ListItemProps)=>{
    const {name} =props
    return(
        <li className={style.ListItem}> 
        {name}
        <Button text={'-'} type={'secondary'} />
        </li>
    )
}

export { ListItem}