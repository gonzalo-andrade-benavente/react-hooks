import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { loading, data }  = state;

    // let author, quote;

    // if ( data[0] ) {
    //     author = data[0].author;
    //     quote = data[0].quote;
    // }

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1> Breaking Bad Quotes </h1>
            <hr />

            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-right">
                            <p > { quote } </p>
                            <footer className="blockquote-footer">
                                { author }
                    </footer>
                        </blockquote>


                    )

            }
            <button className="btn btn-primary" onClick={ increment }>
                Siguiente Quote
            </button>

   </div>


    )


}

export default MultipleCustomHooks;