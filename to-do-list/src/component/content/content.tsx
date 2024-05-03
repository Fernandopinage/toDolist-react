import style from './content.module.css';
import React from 'react';

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className={style.Content}>
            {children}
        </div>
    );
}

export { Content };