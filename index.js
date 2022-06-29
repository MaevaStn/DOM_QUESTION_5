let mailUser;
let mailPoint;
let mailArobase;
let msg = document.getElementById('msg');

function verifMail() {

    mailUser = document.getElementById('inputMail').value; 

    if (mailUser.includes('@') && mailUser.includes('.')){ //verifie si les deux caracteres sont presents
        mailArobase = mailUser.indexOf('@'); 
        mailPoint = mailUser.substring(mailArobase);
     if(mailPoint.includes('.')){
         msg.innerHTML = '<span class="text-ok">Email valide</span>';
     } else {
         msg.innerHTML = '<span class="text-faux">Email invalide</span>';
     } 
     
    } else {
         msg.innerHTML = '<span class=text-faux">Email invalide</span>';
     }
}

document.getElementById('inputMail').addEventListener('keydown', verifMail, false);

