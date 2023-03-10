export const home ={
    template: `      
    <div class="text-center">
        <h1>Birras y tapas</h1> 
    </div>
    <div class="container-fluid">
        <div class="row border m-5 shadow p-3 mb-5 bg-body-tertiary rounded pt-5" id="pedidos">
            <div class="col-6" id="registrarPedido">
                <p>Aqui se podra registrar los pedidos</p>
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center text-center" id="descripcionCervezas">
                <p>Eligue una cerveza para ver su descripcion</p>
            </div>
        </div>
        <div class="row border m-5 shadow p-3 mb-5 bg-body-tertiary rounded pt-5">
            <div class="col-12" id="tabla">
                <p>Aqui ira una tabla de pedidos</p>
            </div>
        </div>
    </div> `,
    script: ()=>{
        console.log('hola soy Home')
    }
}