import { cervezas } from "./Cervezas";
import { pedidos } from "./Pedidos";


export const editarPerdido = {
    template:`
    <form id="EditarPedido" class="needs-validation w-50 pt-2 ps-2" novalidate>
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
        <button id="editar" type="submit" class="btn btn-primary">Editar pedido</button>
    </form>
    `,
    script:(id)=>{
        

        var html=`
        <option >Selecione una cerveza</option>
        `
        

        pedidos.forEach(pedido => {
            if(pedido.id==id){
                //buscamos la posicion de las cervezas
                console.log(pedido.cervezas)
                const posicion = cervezas.findIndex(cerveza=>cerveza.nombre == pedido.cervezas)
                console.log(posicion)

                cervezas.forEach(cerveza => {
                    if(cerveza.id!=posicion+1){
                        html+=`<option value="${cerveza.id}">${cerveza.nombre}</option>`
                    }else{

                        html+=`<option value="${cerveza.id}" selected>${cerveza.nombre}</option>`
                    }
                });

                document.getElementById('nombre').value=pedido.nombre
                document.getElementById('mesa').value=pedido.mesa
                document.getElementById('cantidad').value=pedido.cantidad
            }
        });

        const select = document.querySelector("#cervezas")

        const formEditar = document.querySelector("#EditarPedido")

        select.innerHTML = html 

        var nombreCerveza = ""

        const botonEditar = document.querySelector('.editar')

        select.addEventListener("change", (event) => {
            cervezas.forEach(cerveza => {
                if(cerveza.id==event.target.value){
                    nombreCerveza=cerveza.nombre
                }
            });
        });


        document.querySelector('#editar').addEventListener('click', (e)=>{
            e.preventDefault();

            formEditar.classList.add('was-validated');
            if(formEditar.checkValidity()){
                formEditar.classList.remove('was-validated')
                
                //Cogo los datos de los values
                const nombre = document.querySelector("#nombre").value
                const mesa = document.querySelector("#mesa").value
                const cantidad = document.querySelector("#cantidad").value

                //Busco la posicion donde esta el usuario
                const posicionPedido = pedidos.findIndex(usuario=>usuario.id == id)


                pedidos[posicionPedido].nombre = nombre
                pedidos[posicionPedido].mesa = mesa
                pedidos[posicionPedido].cantidad = cantidad
                pedidos[posicionPedido].cervezas = nombreCerveza

                // Selecciono la fila que deseos actualizar
                var row = document.getElementById(id);

                // Modifico los valores de las celdas
                row.cells[0].innerHTML = nombre;
                row.cells[1].innerHTML = mesa;
                row.cells[2].innerHTML = nombreCerveza;
                row.cells[3].innerHTML = cantidad;

                //Reemplazo la fila antigua con la fila modificada en su posición original
                var parent = row.parentNode;
                var nextSibling = row.nextSibling;
                parent.removeChild(row);
                parent.insertBefore(row, nextSibling);
            }
        });
        
    }
}