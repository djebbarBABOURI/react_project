import React from 'react'

function moyenne({ note1, note2 }) {
    return (
        
            <div style={{ 'border': '1px solid black', 'width': '200px' }}>
                <label>Votre premiere note est :</label>
                <sapn>{note1}</sapn>
                <br />
                <label>Votre deuxieme note est :</label>
                <sapn>{note2}</sapn>

                <div>Votre moyenne est : {(note1 + note2) / 2} </div>
            </div>
    

    )
}

export default moyenne