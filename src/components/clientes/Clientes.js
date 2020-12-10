import React, { Fragment, useEffect } from 'react';
import clienteAxios from '../../config/axios';

const Clientes = () => {
    
    const consultarApi = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');

        console.log(clientesConsulta);
    }

    useEffect(() => {
        consultarApi();
    }, [])
    return (
        <Fragment>
            <h1>Componente clientes</h1>
        </Fragment>
    )
}

export default Clientes
