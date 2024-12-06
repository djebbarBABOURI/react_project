import React from 'react'
import "./contact.css"
const Contact = () => {
    return (
        <form className='form'>
            <label htmlFor=''>Votre nom</label>
            <input type='text' />
            <br />
            <label htmlFor=''>Votre prenom</label>
            <input type='text' />
            <br />
            <label htmlFor=''>Votre mot de passe</label>
            <input type='password' />
            <br />

            <label htmlFor=''>Votre email</label>
            <input type='email' />
            <br />

            <input type='submit' value="valider" />
        </form>
    )
}

export default Contact