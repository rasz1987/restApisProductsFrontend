import React, {Fragment} from 'react';
import Header from './components/layout/Header';
import Navegacion from './components/layout/Navegacion';

const App = () => {
    return (
        <Fragment>
            <Header />

            <div class="grid contenedor contenido-principal">
                <Navegacion />
            </div>

        </Fragment>
        
    )
}

export default App
