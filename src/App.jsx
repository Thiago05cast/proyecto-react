
import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/navbar/navbar'
import CartWidget from './componentes/CartWidgets/CartWidget'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


function App() {
      return(
        <>
        <Navbar/>
        <ItemListContainer greeting="Hola, soy Thiago Castaño"/>
        </>
      )
}

export default App;
