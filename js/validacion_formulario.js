const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const parrafo = document.getElementById("warnings");
const form = document.getElementById("form");


form.addEventListener("submit", e=>{
     e.preventDefault()
     let warnings = ""
     let entrar= false
     let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; 
     let regexApellido = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; 
     let regexEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})+$/;
     let regexMensaje = /^.{1,255}$/;


      parrafo.innerHTML="vacio";

      


     if(!regexNombre.test(nombre.value) ){
          warnings+='♦El nombre no es valido <br>'
          entrar= true
     }
     if(!regexApellido.test(apellido.value)){
          warnings+='♦El apellido no es valido <br>'
          entrar= true
     }
     // console.log(regexEmail.test(email.value))

     if(!regexEmail.test(email.value)){
          warnings+='♦El mail no es valido <br>'
          entrar= true
     }
     if(!regexMensaje.test(mensaje.value)){
          warnings+='♦El mensaje no es valido <br>'
          entrar= true
     }

     if(entrar){
          parrafo.innerHTML = warnings
     }
     else
     {
     parrafo.innerHTML = "♦Formulario enviado"
     form.reset(); 
     }

});




//  const d = document;



//  export default function contactFormValidations(){

//      d.addEventListener("keyup",(e)=>{
//           let $input=e.target,
//           pattern = $input.pattern || $input.dataset.pattern;
//           if(pattern && $input.value!==""){
//                let regex =new ResExp(pattern);
//                return !regex.exec($input.value)
//                ? d.getElementById($input.name).classList.add("is-active")
//                :  d.getElementById($input.name).classList.remove("is-active");

//           }
     
//      if(!pattern){
//           return $input.value===""
//           ? d.getElementById($input.name).classList.add("is-active")
//           : d.getElementById($input.name).classList.remove("is-active");
//      }

//  }
//      )};


// export default function contactFormValidations(){
//       const $form = d.querySelector(".contact-form"),
//       $inputs = d.querySelectorAll(".contact-form[required]");

//       console.log("$inputs");

//       $inputs.forEach((input)=>{
//           const $span = d.createElement("span");
//           $span.id = input.name;
//           $span.textContent = input.title;
//           $span.classList.add("contact-form-error","none");
//           input.insertAdjacentElement("afterend", $span);
//      });

     // d.addEventListener("keyup",(e)=>{
     //      if(e.target.matches(".contact-form[required]")){
     //           let $input = e.target,
     //           pattern= $input.pattern || $input.dataset.pattern;
     //           // console.log($input.pattern);
     //           if(pattern){
     //                console.log("El input tiene patron");
     //           }
     //           if(!pattern){
     //                console.log("El input no tiene patron");
     //           }
     
     
     //      }
     // });



