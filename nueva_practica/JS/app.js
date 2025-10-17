const nombre = document.querySelector(".nombre")
const apellidos  = document.querySelector(".apellidos")
const edad = document.querySelector(".edad")
const email = document.querySelector(".email")
const nacionalidad = document.querySelector(".nacionalidad")
const boton = document.querySelector(".boton")

const datosguardados1=document.querySelector(".datosguardados1")
const datosguardados2=document.querySelector(".datosguardados2")
const datosguardados3=document.querySelector(".datosguardados3")
const datosguardados4=document.querySelector(".datosguardados4")
const datosguardados5=document.querySelector(".datosguardados5")

const guardado1=localStorage.getItem("texto1")
if(guardado1){
    datosguardados1.textContent = guardado1;
}

const guardado2=localStorage.getItem("texto2")
if(guardado2){
    datosguardados2.textContent = guardado2;
}

const guardado3=localStorage.getItem("texto3")
if(guardado3){
    datosguardados3.textContent = guardado3;
}

const guardado4=localStorage.getItem("texto4")
if(guardado4){
    datosguardados4.textContent = guardado4;
}

const guardado5=localStorage.getItem("texto5")
if(guardado5){
    datosguardados5.textContent = guardado5;
}


boton.addEventListener("click",()=>{

    const texto1 = nombre.value
    const texto2 = apellidos.value
    const texto3 = edad.value
    const texto4 =email.value
    const texto5 = nacionalidad.value

    if(texto1!=""){
    localStorage.setItem("texto1", texto1);
    datosguardados1.textContent = `${texto1}`;
    }

if(texto2 !=""){
    localStorage.setItem("texto2", texto2)
    datosguardados2.textContent = `${texto2};`
}

if(texto3 !=""){
    localStorage.setItem("texto3", texto3)
    datosguardados3.textContent = `${texto3};`
}

if(texto4 !=""){
    localStorage.setItem("texto4", texto4)
    datosguardados4.textContent = `${texto4};`
}

if(texto5 !=""){
    localStorage.setItem("texto5", texto5)
    datosguardados5.textContent = `${texto5}`
}
})
