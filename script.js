
function sendMail() {
    // Ensure Email.js library is properly loaded
    (function () {
        emailjs.init("_kCy1xCT69mPyyC81"); // Account Key
    })();

    // Get input values
    var params = {
        answer1: document.querySelector("#answer1").value,
        answer2: document.querySelector("#answer2").value,
        answer3: document.querySelector("#answer3").value,
    };

    var serviceID = "service_vjao83d"; // Service ID
    var templateID = "template_7z8qpq1"; // Template ID

    // Send email
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Answers have been sent to Austin. Thank you!");
        })
        .catch(error => {
            console.error("Error sending email:", error);
            // Handle the error or log it for further investigation
        });
}
