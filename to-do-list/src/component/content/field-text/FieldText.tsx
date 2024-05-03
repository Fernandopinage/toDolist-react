import style from './field-text.module.css'
const FieldText = (props: object)=>{
    return(
        <input className={style.FieldText} type="text" {...props} />
    );
}

export {FieldText}