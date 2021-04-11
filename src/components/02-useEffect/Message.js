import { useEffect, useState } from "react";

const Message = () => {

    const [coords, setCoords] = useState({
        x:0,
        y:0
    });

    useEffect( () => {

        const mouseMove = (e) => {
            const coors = { x:e.x, y:e.y}
            setCoords({
                x: coors.x,
                y: coors.y

            })
        }

        window.addEventListener( 'mousemove', mouseMove);

        return () => { // Cleanup
            window.removeEventListener( 'mousemove', mouseMove);
        }
    }, []);

    return (
        <div>

            <h3>Eres Genial!!</h3>
            <p> x:{ coords.x } y: { coords.y } </p>
        </div>

    )

}

export default Message;