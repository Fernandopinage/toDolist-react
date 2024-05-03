import style from './footer.module.css'
interface User{
    userName: string
}

const Footer = (props: User)=>{
    const { userName } = props
    const data = new Date().getFullYear();
    return(
        <div className={style.Footer}>
            <p>React Básico - {data}  | {userName}</p>
        </div>
    )
}
export {Footer}