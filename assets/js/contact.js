/*=============== EMAIL JS ===============*/
const   contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const   sendEmail = (e) => {
    e.preventDefault()

    // serviceID - tem[late-ID - #form - publicKey
    emailjs.sendForm('','','','')
}

contactForm.addEventListener('submit', sendEmail)