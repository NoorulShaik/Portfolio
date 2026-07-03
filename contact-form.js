
const scriptURL = 'https://script.google.com/macros/s/AKfycbwsRzeELFMx9Te-2SPzSkEyaBkIPADxXr7uq_OLJtZhUe6xvfRrgL8iZMe4jye3Gd8B/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully, Thank You."
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
 