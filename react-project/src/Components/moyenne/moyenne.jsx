import React from 'react'

function moyenne({ note1, note2 }) {
    return (
        
            <div style={{ 'border': '1px solid black', 'width': '200px' }}>
                <label>Votre premiere note est :</label>
                <span>{note1}</span>
                <br />
                <label>Votre deuxieme note est :</label>
                <span>{note2}</span>

                <div>Votre moyenne est : {(note1 + note2) / 2} </div>
            </div>
    

    )
}

export default moyenne