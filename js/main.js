$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});
var config = {
    apiKey: "AIzaSyA59NpiTIsrPUWUoUjuIbgUJMn4DEPOHps",
    authDomain: "hotel-cesar-palace.firebaseapp.com",
    databaseURL: "https://hotel-cesar-palace.firebaseio.com",
    projectId: "hotel-cesar-palace",
    storageBucket: "hotel-cesar-palace.appspot.com",
    messagingSenderId: "64963642472"
  };
  firebase.initializeApp(config);
  var hoteldb = firebase.database();

const $formRegistro = document.querySelector('#registro')

$formRegistro.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const formRegis = new FormData($formRegistro)
    if(formRegis.get('contrasena') == formRegis.get('concontrasena')){
        const datauser = await firebase.auth().createUserWithEmailAndPassword(formRegis.get('email'),formRegis.get('contrasena')).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal('Ooops...', errorMessage, 'error')
          })
          if (datauser) {
              const newuser = {
                  nombre: formRegis.get('nombre'),
                  apellido: formRegis.get('apellido'),
                  celular: formRegis.get('celular'),
                  cedula: formRegis.get('cedula'),
                  concontraseña: formRegis.get('concontrasena')     
              }
              
              hoteldb.ref('users/' + datauser.user.uid).set(newuser);
              swal("Buen trabajo!", "Usuario creado exitosamente!", "success");
          }
    } else swal('Ooops...', 'Las contraseñas no coinciden', 'error')
                    //esto es el login

    
})

const $formLogin = document.querySelector('#login')
$formLogin.addEventListener('submit', async (event) =>{
    event.preventDefault()
    const formlog = new FormData($formLogin)
    const datalog = await firebase.auth().signInWithEmailAndPassword(formlog.get('usuario'), formlog.get('contra')).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ...
        location.href ="pages/inicio.html";
      });
      
})