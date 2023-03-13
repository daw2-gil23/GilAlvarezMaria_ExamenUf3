import { cervezas } from "./bd";

export const pedido ={
    template:`
    <div class="col-6" id="registrarPedido">
        <h1>Selecciona tu cerveza y haz tu pedido</h1>
        <form id="FormCervezas" class="needs-validation w-50 pt-2 ps-2 FormCervezas" novalidate>
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre del grupo:</label>
                <input id="nombre" type="text" class="form-control nombre" required pattern="[A-Z_a-z]{4,10}">
                <!-- mensaje si valida -->
                <div class="valid-feedback">Todo estupendo</div>
                <!-- mensaje si no valida -->
                <div class="invalid-feedback">Del 4 al 10 y solo letras</div>
            </div>
            <div class="mb-3">
                <label for="mesa" class="form-label">Mesa:</label>
                <input type="text" class="form-control " id="mesa" value="" required pattern="^(1[0-5]|[1-9])$">
                <!-- mensaje si valida -->
                <div class="valid-feedback">Todo estupendo</div>
                <!-- mensaje si no valida -->
                <div class="invalid-feedback">Del 1 al 15</div>
            </div>
                <label for="cervezas" class="form-label">Eligue tu birra:</label>
                <select name="select" id="cervezas">
                </select>
            <div class="mb-3">
            <label for="cantidad" class="form-label">Cantidad:</label>
                <input type="text" class="form-control " id="cantidad" value="" required pattern="^[1-9][0-9]*$">
                <!-- mensaje si valida -->
                <div class="valid-feedback">Todo estupendo</div>
                <!-- mensaje si no valida -->
                <div class="invalid-feedback">Tienes que pedir como minimo 1</div>
            </div>
            <button id="enviar" type="submit" class="btn btn-success w-100 enviarPedido">Añadir Pedido</button>
        </form>
    </div>
    <div class="col-6 d-flex justify-content-center align-items-center text-center" id="descripcionCervezas">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h3 class="card-text">Mahou Cinco Estrellas</h3> 
                <p class="card-text">Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.</p>
                <p>Precio: 12</p> 
            </div>
            <img src="https://www.mahou.es/wp-content/themes/mahou_v2/template-contents/mahou-familia/dist/images/Botella_Mahou_5_Estrellas.png" class="w-50 ">
        </div>
    </div>
    `,
    script: ()=>{
        console.log('hola soy pedidos')

        var html=``

        cervezas.forEach(cerveza => {
            html+=`<option value="${cerveza.id}">${cerveza.nombre}</option>`
        });

        const select = document.querySelector("#cervezas")

        select.innerHTML = html 

        select.addEventListener("change", (event) => {
            //Busco la posicion donde esta el usuario
            const posicionCerveza = cervezas.findIndex(cerveza=>cerveza.id == event.target.value)

            const html=`
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                   <h3 class="card-text">${cervezas[posicionCerveza].nombre}</h3> 
                    <p class="card-text">${cervezas[posicionCerveza].descripcion}</p>
                    <p>Precio: ${cervezas[posicionCerveza].precio}</p>
                </div>
                <img src="${cervezas[posicionCerveza].imagen}" class="card-img-bottom w-50 h-25" alt="FotoCerveza">
            </div>
            `
            const descripcion = document.querySelector("#descripcionCervezas")
            
            descripcion.innerHTML = html
        });

    }
}