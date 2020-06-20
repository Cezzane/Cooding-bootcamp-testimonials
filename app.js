var btn_prev=document.querySelector('.btn_prev');
var btn_next=document.querySelector('.btn_next');
var john=document.querySelector('.john');
var tanya=document.querySelector('.tanya');
btn_next.addEventListener('click',()=>{
    console.log('App works!')

    tanya.classList.remove("show")
    tanya.classList.toggle('hide')
    john.classList.toggle("hide")
    john.classList.toggle('show')
})

btn_prev.addEventListener('click',()=>{
    console.log('app WOrks!')
    tanya.classList.remove("show")
    tanya.classList.toggle('hide')
    john.classList.toggle("hide")
    john.classList.toggle('show')
})
