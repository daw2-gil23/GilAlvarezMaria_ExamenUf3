import { cervezas } from "./Cervezas"

export const descripcion = {
    template:``,
    script: (id)=>{
        //Busco la posicion donde esta el usuario
        const posicionCerveza = cervezas.findIndex(usuario=>usuario.id == id)

        const html=`
          <div class="d-flex align-items-center justify-content-center pt-2">
            <img src="${cervezas[posicionCerveza].imageUrl}" alt="FotoCerveza" class="w-25"> 
          <div>
          </div class="d-flex align-items-center justify-content-center pe-1"> 
            <p>${cervezas[posicionCerveza].description}</p>
          </div> 
        `

        const descripcion = document.querySelector("#descripcionCervezas")

        descripcion.innerHTML = html
    }
}