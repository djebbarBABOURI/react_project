import React from 'react'

export const Child = ({ affichage }) => {

    return (
        <>
            <p>Mon composant fils</p>
            <button onClick={() => { affichage(); }}>Envoyer</button>
        </>
    )
}
