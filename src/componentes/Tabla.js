import { editarPerdido } from "./EditarPedido"
import { pedidos } from "./Pedidos"

export const tabla ={
    template:`
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Mesa</th>
        <th scope="col">Cervezas</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Eliminar</th>
        <th scope="col">Editar</th>
        </tr>
    </thead>
    <tbody id="cuerpoTabla">
    </tbody>
    </table>
    `,
    script: ()=>{

        const main = document.querySelector("main")

        main.addEventListener("click",(event)=>{
            if(event.target.classList.contains('eliminar')){
                
                //Cojo el id que ahi en el data-id del botton
                let cervezaID = event.target.dataset.id
                alert("Estás borrando el usuario con id: " + cervezaID)

                //Cojo el tr que tiene de id la id del usuario
                const trId = document.getElementById(cervezaID); 
                console.log(trId)
                //Le añado al tr una clase para que desaparezca
                trId.classList.add('fila-oculta')

                //buscamos la posicion del dato que vamos a eliminar
                const posicion = pedidos.findIndex(pedido=>pedido.id == cervezaID)

                console.log(posicion)

                pedidos.splice(posicion,1)

                console.log(pedidos)
            }
            if(event.target.classList.contains('editar')){
                
                const editar = document.querySelector('#registrarPedido')

                editar.innerHTML = editarPerdido.template
                //Cojo el id que ahi en el data-id del botton
                let cervezaID = event.target.dataset.id

                editarPerdido.script(cervezaID)
            }
        })
        
    }
}