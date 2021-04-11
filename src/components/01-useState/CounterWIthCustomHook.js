import './counter.css';
import { useCounter }  from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } = useCounter( 26 );

    return (

        <div>

            <h1>Counter with hook: { counter  }</h1>
            <hr />

            <button className="btn" onClick={ () => increment(2) }>+1</button>
            <button className="btn" onClick={ reset }> Resert </button>
            <button className="btn" onClick={ () => decrement(2) }>-1</button>

        </div>

    )


}