import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Detalhes from './features/Imprimir/views/Detalhes'
import Search from './features/Search/index'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/detalhes/:titulo' component={Detalhes}/>
                <Route path='/' exact component={Search}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes