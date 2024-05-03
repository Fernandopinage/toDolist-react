import style from './buttom.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = (props: any) => {
    const { text, type = 'primary', ...outrosProps } = props;
    return (
        <button className={style.Button} typeOption={type} {...outrosProps}>
            {text}
        </button>
    );
}

export { Button };
