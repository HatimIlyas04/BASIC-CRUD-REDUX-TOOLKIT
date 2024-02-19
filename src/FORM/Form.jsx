import React from 'react'
import './Form.css'

function Form(props) {
    return (
        <div className='form flex'>
            <form onSubmit={props.addUser}>
                <input name="name"
                    type="text"
                    className="feedback-input"
                    onChange={(e) => props.setName(e.target.value)}
                    placeholder="Name" />

                <input name="email"
                    type="text"
                    className="feedback-input"
                    onChange={(e) => props.setEmail(e.target.value)}

                    placeholder="Email" />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default Form