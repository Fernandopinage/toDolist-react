import style from './footer.module.css'
interface User{
    userName: string
}

const Footer = (props: User)=>{
    const { userName } = props
    return(
        <div className={style.Footer}>
            <p>React Básico - 2023 | {userName}</p>
        </div>
    )
}
export {Footer}