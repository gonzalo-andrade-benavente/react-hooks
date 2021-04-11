import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [ state, setState ] = useState({
       data: null,
       loading: true,
       error: null 
    });

    useEffect( () => {

        //cleaup
        return () => {
            isMounted.current = false;
        }

    }, [] );

    useEffect( () => {

        setState({ data:null, loading:true, error:null })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if ( isMounted.current ) {

                    setState({
                        data,
                        loading: false,
                        error: null
                    });

                }
                
            })

    }, [url]); // Solo se hará este efecto cuando cambie la URL.

    return state;

}

