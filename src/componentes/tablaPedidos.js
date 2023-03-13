import { pedidos } from "./Arraypedidos";
import { v4 as uuidv4 } from 'uuid'
import { cervezas } from "./bd";
import { pedido } from "./Pedidos";

export const tablaPedidos ={
    template:`
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Cervezas</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio de la cerveza</th>
        <th scope="col">Precio del pedido</th>
        </tr>
    </thead>
    <tbody id="cuerpoTabla">
    </tbody>
    </table>
   <p id="precioTotal"><strong>Precio total: </strong></p>
    `,
    script: ()=>{

        const main = document.querySelector("main")

        const formPedido = document.querySelector('#FormCervezas')

        main.addEventListener("click",(event)=>{
            if(event.target.classList.contains('enviarPedido')){
                console.log("???")
                
                event.preventDefault();
                formPedido.classList.add('was-validated')
            
                if(formPedido.checkValidity()){
                    formPedido.classList.remove('was-validated')

                    const select = document.querySelector("#cervezas")

                    const selectedOption = select.options[select.selectedIndex]
                    const inputCerveza = selectedOption.text

                    var precioCerveza = 0 

                    cervezas.forEach(cerveza => {
                        if(cerveza.nombre==inputCerveza){
                            precioCerveza = cerveza.precio
                        }
                    });
    
                    const inputNombre = document.querySelector("#nombre").value
                    const inputMesa = document.querySelector("#mesa").value
                    const inputCantidad = document.querySelector("#cantidad").value
    
                    //Guardo en la variable nuestra tabla con los usuarios
                    var table = document.getElementById("cuerpoTabla");
    
                    //Creo un tr con createElement 
                    var tr = document.createElement("tr");

                    //Creo un id nuevo con uuid
                    const idNuevo = uuidv4() 

                    tr.setAttribute("id", idNuevo);

                    const precioTotal = precioCerveza * inputCantidad

                    var nFilas = table.rows.length

                    var sumaPrecio = precioTotal

                    pedidos.forEach(pedido => {
                        sumaPrecio = sumaPrecio + pedido.precioTotalPedido
                    });

                    const pedidoNuevo={
                        id:idNuevo,
                        nombre:inputNombre,
                        mesa:inputMesa,
                        cerveza:inputCerveza,
                        cantidad:inputCantidad,
                        precioCerveza: precioCerveza,
                        precioTotalPedido: precioTotal, 
                        precioTotal: sumaPrecio
                    }
    
                    pedidos.push(pedidoNuevo)

                    console.log(pedidos)

                    console.log(sumaPrecio)


                    document.querySelector("#precioTotal").innerHTML = `Precio total: ${sumaPrecio}`

                    //Inyecto en el tr los valores
                    tr.innerHTML = `
                        <td class="px-5">${inputCerveza}</td>
                        <td class="px-5">${inputCantidad}</td>
                        <td class="px-5">${precioCerveza}</td>
                        <td class="px-5">${precioTotal}</td>
                        <td class="px-5"><button data-id="${pedidoNuevo.id}" type="button" class="btn btn-danger eliminar" >Eliminar</button></td>
                        <td class="px-5"><button data-id="${pedidoNuevo.id}" type="button" class="btn btn-warning editar">Editar Pedido</button></td>
                    </tr>
                    `
    
                    //Añado el tr que he creado en la tabla
                    table.appendChild(tr);
                }    
            }
            if(event.target.classList.contains('eliminar')){
                
                console.log("le has dado al boton eliminar")

                //Cojo el id que ahi en el data-id del botton
                let pedidoId = event.target.dataset.id
                alert("Estás borrando el pedido con id: " + pedidoId)

                //Cojo el tr que tiene de id la id del usuario
                const trId = document.getElementById(pedidoId); 
                console.log(trId)
                //Le añado al tr una clase para que desaparezca
                trId.classList.add('fila-oculta')

                //buscamos la posicion del dato que vamos a eliminar
                const posicion = pedidos.findIndex(pedido=>pedido.id == pedidoId)

                console.log(posicion)

                pedidos.splice(posicion,1)

                console.log(pedidos)

                var sumaPrecio = 0

                pedidos.forEach(pedido => {
                    sumaPrecio = sumaPrecio + pedido.precioTotalPedido
                    console.log(sumaPrecio)
                });

                document.querySelector("#precioTotal").innerHTML = `Precio total: ${sumaPrecio}`
            }
            if(event.target.classList.contains('editar')){

                const editar = document.querySelector('#registrarPedido')

                //Cojo el id que ahi en el data-id del botton
                let pedidoID = event.target.dataset.id

                var editarHtml = `
                <form id="EditarPedido" class="needs-validation w-50 pt-2 ps-2" novalidate>
                    <label for="cervezas" class="form-label">Cervezas:</label>
                    <select name="select" id="cervezas">
                    </select>
                    <div class="mb-3">
                    <label for="cantidad" class="form-label">Cantidad:</label>
                        <input type="number" class="form-control " id="cantidad" value="" required>
                    </div>
                    <button data-id="${pedidoID}" type="submit" class="btn btn-primary actualizar">Actualizar</button>
                </form>
                `

                editar.innerHTML = editarHtml   

                var html = ``

                pedidos.forEach(pedido => {
                    if(pedido.id==pedidoID){
                        //buscamos la posicion de las cervezas
                        const posicion = cervezas.findIndex(cerveza=>cerveza.nombre == pedido.cerveza)
        
                        cervezas.forEach(cerveza => {
                            if(cerveza.id!=posicion+1){
                                html+=`<option value="${cerveza.id}">${cerveza.nombre}</option>`
                            }else{
        
                                html+=`<option value="${cerveza.id}" selected>${cerveza.nombre}</option>`
                            }
                        });
                        document.getElementById('cantidad').value=pedido.cantidad
                    }                   
                });

                const select = document.querySelector("#cervezas")

                const formEditar = document.querySelector("#EditarPedido")
        
                select.innerHTML = html 
            }
            if(event.target.classList.contains('actualizar')){
                
                event.preventDefault();

                //Cojo el id que ahi en el data-id del botton
                let pedidoID = event.target.dataset.id

                console.log(pedidoID)

                const select = document.querySelector("#cervezas")

                const cantidad = document.querySelector("#cantidad").value

                const selectedOption = select.options[select.selectedIndex]
                const NuevaCerveza = selectedOption.text

                var precioCerveza = 0 

                cervezas.forEach(cerveza => {
                    if(cerveza.nombre==NuevaCerveza){
                        precioCerveza = cerveza.precio
                    }
                });

                //Busco la posicion donde esta el pedido
                const posicionPedido = pedidos.findIndex(pedido=>pedido.id == pedidoID)

                const precioTotal = precioCerveza*cantidad

                pedidos[posicionPedido].cantidad= cantidad
                pedidos[posicionPedido].cerveza= NuevaCerveza
                pedidos[posicionPedido].precioCerveza= precioCerveza
                pedidos[posicionPedido].precioTotalPedido= precioTotal

                console.log(pedidos)
                
                // Selecciono la fila que deseos actualizar
                var row = document.getElementById(pedidoID);

                // Modifico los valores de las celdas
                row.cells[0].innerHTML = NuevaCerveza;
                row.cells[1].innerHTML = cantidad;
                row.cells[2].innerHTML = precioCerveza;
                row.cells[3].innerHTML = precioTotal;
                
                //Reemplazo la fila antigua con la fila modificada en su posición original
                var parent = row.parentNode;
                var nextSibling = row.nextSibling;
                parent.removeChild(row);
                parent.insertBefore(row, nextSibling);

                var sumaPrecio = 0

                pedidos.forEach(pedido => {
                    sumaPrecio = sumaPrecio + pedido.precioTotalPedido
                    console.log(sumaPrecio)
                });

                document.querySelector("#precioTotal").innerHTML = `Precio total: ${sumaPrecio}`

                document.querySelector('#pedidos').innerHTML = pedido.template
                pedido.script()



            }
        })
        
    }
}