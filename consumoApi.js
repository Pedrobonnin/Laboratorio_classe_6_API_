//Declaración de variables
(()=> {
    const $fetchAsync = document.getElementById("Async-fetchUsers"),
      $fragmento = document.createDocumentFragment();

    

    //Implementación de FETCH connun a funcion asincrona

async function getData(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        respuesta = await res.json();
        //console.log(res,data)

        if(!res.ok){
            throw new Error("Error al solicitar los datos");
        }

    
        respuesta.forEach(element => {
            const $lista=document.createElement("li");
                $lista.innerHTML= `Nombre:  ${element.name} <br> Correo:   ${element.email} <br> celular:   ${element.phone}  <br> Usuario:   ${element.username}`
                $fragmento.appendChild($lista);
            
        });
        //insertar en el DOM
        $fetchAsync.appendChild($fragmento);

    }catch(err){
        let mensaje =err.statusText || "Ocurrio un error en la llamada de api";
        $fetchAsync.innerHTML=`ERROR ${err.status}:${mensaje}`;

    }finally{
        console.log("Esta linea se iprime igual")
    }
}
//Llamar la funcion asincrona para que se ejecute
getData();

})();



