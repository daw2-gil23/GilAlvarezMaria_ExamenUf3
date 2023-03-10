export const home ={
    template: `      
    <div class="text-center" id="titulo">
    </div>
    <div class="container-fluid">
        <div class="row border m-5 shadow p-3 mb-5 bg-body-tertiary rounded pt-5" id="pedidos">

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