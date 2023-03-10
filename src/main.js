
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { home } from './vistas/Home'
import { pedido } from './componentes/pedidos'
import { tablaPedidos } from './componentes/tablaPedidos'


document.querySelector('main').innerHTML = home.template

document.querySelector('#pedidos').innerHTML = pedido.template
pedido.script()

document.querySelector('#tabla').innerHTML = tablaPedidos.template
tablaPedidos.script()


