function showPass(){
 const eye = document.querySelector('#eye');
 const eyeSlash = document.querySelector('#eye-slash');
 const fieldPass = document.querySelector('#field-password');

if(eye.style.display === 'none'){
    eye.style.display = 'block';
    eyeSlash.style.display = 'none';
    fieldPass.type = 'text'
}
else{
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
    fieldPass.type = 'password'
}
};
document.querySelector('#btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Logado!')
})
