
export interface User  {
    name: string
}

const  Header  = (props:User)=>{
    const {name} = props;
    return(
        <div>
            <h1>Wecome, {name}</h1>
        </div>
    );
};

export {Header};