
function sendMail (){
    (function(){
        emailjs.init("_kCy1xCT69mPyyC81") //Account Key
    
    })();
    var params = {
        answer1: document.querySelector("#answer1").value,
        answer2: document.querySelector("#answer2").value,
        answer3: document.querySelector("#answer3").value,
    };
    var serviceID = "service_vjao83d" // serviceID
    var templateID = "template_7z8qpq1" // TemplateID

    emailjs.send(serviceID,templateID,params)
    .then( res=>{
        alert("Answers have been sent to Austin, Thank you!")

    })
    .catch();
}