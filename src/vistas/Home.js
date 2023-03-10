export const home ={
    template: `      
    <div class="container-fluid">
        <div class="row">
            <div class="col-6" id="registrarPedido">
                <p>Aqui se podra registrar los pedidos</p>
            </div>
            <div class="col-6" id="descripcionCervezas">
                <p>Aqui se vera una descripcion da la cerveza</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12" id="tabla">
                <p>Aqui ira una tabla de pedidos</p>
            </div>
        </div>
    </div> `,
    script: ()=>{
        console.log('hola soy Home')
    }
}