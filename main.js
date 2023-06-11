window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)

})

/* show /hide answer */
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon ion-icon');
        if(icon.className === 'add-outline'){
            icon.className = "minus-outline"
        }else{
            icon.className='add-outline';
        }
    })
})


/*==============================================================================================*/

