function limpiar(){
    document.getElementById("calculadora").reset();
}

function calcular(){
    let valor1 = parseFloat(document.getElementById("ancho").value);
    let valor2 = parseFloat(document.getElementById("largo").value);
    let datosPagoResumen = `<div class = "div-resumen sombra1"><p>comprate ${valor1*valor2}m² mas o menos</p></div>`
    //let divPagoResumen= document.createElement("div");
  
  //divPagoResumen.innerHTML = "<div>"+datosPagoResumen+"</div>";
    if(valor1 < 0 || valor2 < 0) {
        alert("no puedes ingresar una medida menor a 0")
    }else{
    document.getElementById("resultado").innerHTML = datosPagoResumen ;
    }
}