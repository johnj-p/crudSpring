function calcular() {
    let l = document.getElementById("txtLocalidad").value
    let p = 0;

    if (l == "VIP") {
        p = 17000;
    }
    else if (l == "Platinum"){
        p = 15000;
    }
    else if (l == "Preferencial"){
        p = 12000;
    }
    else if (l == "General"){
        p = 10000;
    }
    else{
        p = 8000;
    }
    document.getElementById("txtPrecio").value=(`${p}`) 
}

function confirmar() {
    
    let d = parseInt(document.getElementById("txtDni").value)
    let n = document.getElementById("txtNombre").value
    let a = document.getElementById("txtApellido").value
    let e = document.getElementById("txtEmail").value
    let l = document.getElementById("txtLocalidad").value
    let p = parseInt(document.getElementById("txtPrecio").value)

    let usuario = {
        dni: d,
        nombre: n,
        apellido: a,
        email: e,
        localidad: l,
        precio: p
    }        
    let url = "http://localhost:8080/usuarios"
    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
