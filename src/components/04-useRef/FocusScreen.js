import { useRef } from 'react';
import '../02-useEffect/effects.css';

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

    return(
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                className="form-control"
                placeholder="Su nombre"
                ref={ inputRef }
            />

            <button className="btn btn-outine-primary mt-1" onClick= { handleClick }>
                Focus
            </button>

        </div>
    )

}

export default FocusScreen;