import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

const Layout = () => {

    const { counter, increment } = useCounter(1);

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {  data } = state;

    const {  quote } = !!data && data[0];

    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef();

    useLayoutEffect( () => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote]);

    return (
        <div>
            <h1> LayoutEffect </h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p ref={ pTag }> {quote} </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3) }
            </pre>

            <button className="btn btn-primary" onClick={increment}>
                Siguiente Quote
            </button>

        </div>


    )


}

export default Layout;