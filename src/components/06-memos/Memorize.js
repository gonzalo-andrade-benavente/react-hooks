import React from 'react';
import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import Small from './Small';

export const Memorize = () => {

    const { show, setShow } = useState(true);

    const { counter, increment } = useCounter( 10 );

    const handleClick = (e) => {
        setShow( !show );
    }

    console.log(show);

    return(
        
        <div>
            <h1>Counter: <Small value={ counter } /> </h1>
            <hr />

            <button
                className="btn btn-rpimarey"    
                onClick= { increment }
            >
                +1
            </button>

            <button className="btn btn-outline-primary" 
            onClick={ handleClick } >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>

    )

}

//export default Memorize;