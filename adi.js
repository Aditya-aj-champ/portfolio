
var typed = new Typed('#element', {
    strings: ['<SPAN>W</SPAN>elcome <SPAN>T</SPAN>o <SPAN>M</SPAN>y <SPAN>W</SPAN>orld !',
    "I'm <span> A</span>ditya <span>R</span>aj <span>G</span>upta"],
    typeSpeed: 75,
    backSpeed:40,
    });

var typed = new Typed('#typing2', {
strings: ['Developer.',"Freelancer."],
typeSpeed: 100,
backSpeed :50,
loop: true,
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbwQ81unaMhOahRMhxHLtJCQ5H07s0WtMVcP8IkJLr7PS1UEluoGTX0lG1_pVtPY1sQmHQ/exec'
const form = document.forms['submit-to-google-sheet']
const succefull_maassage= document.getElementById('succefull_maassage')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            succefull_maassage.innerHTML="Massage sent Succffully"
            setTimeout(function(){
                succefull_maassage.innerHTML=""
            },4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
