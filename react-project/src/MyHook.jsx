import React, { useState } from 'react'

function MyHook() {
    const [count, setCount] = useState(0);
    const incrementer = () => {

        setCount(count + 1);
    }
    const decrementer = () => {
        if (count >= 1)
            setCount(count - 1)
    }
    return (
        <div>
            <p>Compteur: {count}</p>
            <button onClick={incrementer}>Incrémenter</button>
            <button onClick={decrementer}>Décrémenter</button>
        </div>
    )
}

export default MyHook