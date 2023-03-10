
export const tablaPedidos ={
    template:`
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Cervezas</th>
        <th scope="col">Cantidad</th>
        </tr>
    </thead>
    <tbody id="cuerpoTabla">
    </tbody>
    </table>
    `,
    script: ()=>{

        const main = document.querySelector("main")

        const formPedido = document.querySelector('#FormCervezas')

        main.addEventListener("click",(event)=>{
            if(event.target.classList.contains('enviarPedido')){
                
                event.preventDefault();
                formPedido.classList.add('was-validated')
            
                if(formPedido.checkValidity()){
                    formPedido.classList.remove('was-validated')

                    const select = document.querySelector("#cervezas")

                    const selectedOption = select.options[select.selectedIndex];
                    const inputCerveza = selectedOption.text;
    
                    const inputNombre = document.querySelector("#nombre").value
                    const inputMesa = document.querySelector("#mesa").value
                    const inputCantidad = document.querySelector("#cantidad").value
    
                    //Guardo en la variable nuestra tabla con los usuarios
                    var table = document.getElementById("cuerpoTabla");
    
                    //Creo un tr con createElement 
                    var tr = document.createElement("tr");

    
                    //Inyecto en el tr los valores
                    tr.innerHTML = `
                        <td class="px-5">${inputCerveza}</td>
                        <td class="px-5">${inputCantidad}</td>
                        <td class="px-5"><button type="button" class="btn btn-danger eliminar" >Eliminar</button></td>
                        <td class="px-5"><button type="button" class="btn btn-warning editar">Editar Pedido</button></td>
                    </tr>
                    `
    
                    //Añado el tr que he creado en la tabla
                    table.appendChild(tr);
                }    
            }
            if(event.target.classList.contains('eliminar')){
                
                console.log("le has dado al boton eliminar")

                // //Cojo el id que ahi en el data-id del botton
                // let cervezaID = event.target.dataset.id
                // alert("Estás borrando el usuario con id: " + cervezaID)

                // //Cojo el tr que tiene de id la id del usuario
                // const trId = document.getElementById(cervezaID); 
                // console.log(trId)
                // //Le añado al tr una clase para que desaparezca
                // trId.classList.add('fila-oculta')

                // //buscamos la posicion del dato que vamos a eliminar
                // const posicion = pedidos.findIndex(pedido=>pedido.id == cervezaID)

                // console.log(posicion)

                // pedidos.splice(posicion,1)

                // console.log(pedidos)
            }
            if(event.target.classList.contains('editar')){

                console.log("le has dado al boton editar")
                
                // const editar = document.querySelector('#registrarPedido')

                // editar.innerHTML = editarPerdido.template
                // //Cojo el id que ahi en el data-id del botton
                // let cervezaID = event.target.dataset.id

                // editarPerdido.script(cervezaID)
            }
        })
        
    }
}