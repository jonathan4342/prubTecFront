import React from 'react'
import { useSelector } from 'react-redux';

export const ListaDePalabras = () => {
    const selector = useSelector((state) => state.palabras)

    return (
        <div className='tabla'>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>Resultados:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >

                        {
                            selector.map(e => {
                                return (
                                    <div className="divLista">
                                        <th scope="row">{selector.indexOf(e)+1}</th>
                                        <td >{e.text}</td>
                                    </div>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
