
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { home } from './vistas/Home'
import { formulario } from './componentes/Formulario'
import { tabla } from './componentes/tabla'

document.querySelector('main').innerHTML = home.template

document.querySelector('#registrarPedido').innerHTML = formulario.template
formulario.script()

document.querySelector('#tabla').innerHTML = tabla.template
tabla.script()