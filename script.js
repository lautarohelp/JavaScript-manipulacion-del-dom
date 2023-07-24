const h1 = document.querySelector(`h1`);
const form = document.querySelector(`#form`);
const input1 = document.querySelector(`#calculo1`);
const input2 = document.querySelector(`#calculo2`);
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#resultado");

/* btn.addEventListener(`click`, btnOnClick); */ //nos da resultados es una fucion que podemos usar en ves de agragar archivo en html

form.addEventListener( `submit`, sumarInputValues);

function sumarInputValues(event) { //para q el formulario no me recarge la pagina
   /*  console.log({event}); */ //si lo ponemos recarga pero no elimina nada
    event.preventDefault (); //cansela el
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;

   
    //  alert(Number(input1.value) + Number(input2.value)) con esto puedo mostrar el resultado en la pantalla 
}  


//ejemplo de virus

form.addEventListener("mouseover", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();

    alert("virus")
}
