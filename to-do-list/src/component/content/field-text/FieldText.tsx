import React, { InputHTMLAttributes } from 'react';
import style from './field-text.module.css';

interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {}

const FieldText: React.FC<FieldTextProps> = (props) => {
 
    return (
        <input className={style.FieldText} type="text" {...props} />
    );
}

export { FieldText };
