import React from 'react'
import { useSelector } from 'react-redux';

export const ListaDePalabras = () => {
    const selector = useSelector((state) => state.palabras)

    console.log(selector,"selector")

    return (
        <div className='tabla'>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>Resultados:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selector.map(e => {
                            return (
                                <tr key={e.text}>
                                    <th scope="row"></th>
                                    <td>{e.text}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
