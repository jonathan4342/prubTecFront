import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postText } from '../redux/actions/actions'

export const NavBar = () => {
    const dispatch=useDispatch()
    const [text,setText]=useState('')

    const enviar=(e)=>{
        e.preventDefault()
        dispatch(postText(text))
    }
    return (
        <nav className="navbar  navbar-dark bg-dark contNav">
            <div className="container-fluid  ">
                <form className="d-flex justify-content-between " role="search">
                    <input 
                    className="form-control me-2 input" 
                    placeholder="Ingresa una palabra" 
                    aria-label="Search"
                    value={text}
                    onChange={(e)=>{
                        setText(e.target.value)
                    }}/>
                        <button className="btn btn-primary" onClick={enviar}>Enviar</button>
                </form>
            </div>
        </nav>
    )
}
