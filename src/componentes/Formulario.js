import { cervezas } from "./Cervezas"
import { descripcion } from "./Descripcion"
import { v4 as uuidv4 } from 'uuid'
import { pedidos } from "./Pedidos"

export const formulario = {
    template:`
    <form id="FormCervezas" class="needs-validation w-50 pt-2 ps-2" novalidate>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input id="nombre" type="text" class="form-control nombre" required pattern="[A-Z_a-z]{1,10}">
            <!-- mensaje si valida -->
            <div class="valid-feedback">Todo estupendo</div>
            <!-- mensaje si no valida -->
            <div class="invalid-feedback">Del 1 y 10, no espacios y solo _</div>
        </div>
        <div class="mb-3">
            <label for="mesa" class="form-label">Mesa:</label>
            <input type="number" class="form-control " id="mesa" value="" required>
        </div>
            <label for="cervezas" class="form-label">Cervezas:</label>
            <select name="select" id="cervezas">
            </select>
        <div class="mb-3">
        <label for="cantidad" class="form-label">Cantidad:</label>
            <input type="number" class="form-control " id="cantidad" value="" required>
        </div>
        <button id="enviar" type="submit" class="btn btn-primary">Enviar Pedido</button>
    </form>
    `,
    script:()=>{
        console.log('hola, soy editarPerfil')

        var html=`
        <option >Selecione una cerveza</option>
        `
        cervezas.forEach(cerveza => {
            html+=`<option value="${cerveza.id}">${cerveza.nombre}</option>`
        });

        const select = document.querySelector("#cervezas")

        select.innerHTML = html 

        select.addEventListener("change", (event) => {
            descripcion.script(event.target.value)
        });

        // para form2
        const formPedido = document.querySelector('#FormCervezas')

        document.querySelector('#enviar').addEventListener('click', (e)=>{
            e.preventDefault();

            formPedido.classList.add('was-validated');
            if(formPedido.checkValidity()){
                formPedido.classList.remove('was-validated')
                

                const selectedOption = select.options[select.selectedIndex];
                const inputCerveza = selectedOption.text;

                const inputNombre = document.querySelector("#nombre").value
                const inputMesa = document.querySelector("#mesa").value
                const inputCantidad = document.querySelector("#cantidad").value

                //Creo un id nuevo con uuid
                const idNuevo = uuidv4() 

                const pedidoNuevo={
                    id:idNuevo,
                    nombre:inputNombre,
                    mesa:inputMesa,
                    cervezas:inputCerveza,
                    cantidad:inputCantidad
                }
                
                pedidos.push(pedidoNuevo)

                //Guardo en la variable nuestra tabla con los usuarios
                var table = document.getElementById("cuerpoTabla");

                //Creo un tr con createElement 
                var tr = document.createElement("tr");
                //Le añado un id con la id nueva del usuario
                tr.setAttribute("id", idNuevo);

                //Inyecto en el tr los valores
                tr.innerHTML = `
                    <td class="px-5">${pedidoNuevo.nombre}</td>
                    <td class="px-5">${pedidoNuevo.mesa}</td>
                    <td class="px-5">${pedidoNuevo.cervezas}</td>
                    <td class="px-5">${pedidoNuevo.cantidad}</td>
                    <td class="px-5"><button data-id="${pedidoNuevo.id}" type="button" class="btn btn-danger eliminar" >Eliminar</button></td>
                    <td class="px-5"><button data-id="${pedidoNuevo.id}" type="button" class="btn btn-info editar"">Editar</button></td>
                </tr>
                `

                //Añado el tr que he creado en la tabla
                table.appendChild(tr);
            }
        });
    }
}