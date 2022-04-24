import {useState} from 'react';

export const useForm = <T extends Object>(initState: T) => {
    const [state, setState] = useState(initState);

    // el generico K, hace que la fn funcion onChange asigne el tipo de dato 
    //segun el tipo que recibe como parametro, eje: si recibe un booleano asigna el tipo de dato booleano
    const onChange =<K extends Object> (value: K, field: keyof T) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
    }
}