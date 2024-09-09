var typed= new Typed(".hometitle2" ,{
    strings: ["avec perfection" , "avec qualité"," avec excellence"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});
function sendMail(){
    var parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }    

    emailjs.send("serviceID","templateID",parms).then(alert("Email Sent !"));
}