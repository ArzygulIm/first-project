const burgerFunc = () =>{
    const burger = document.querySelector('.mobile-btn')
    const nav = document.querySelector('.nav')
    const navItems = document.querySelectorAll('.nav__item')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('show-mobile-btn')
        nav.classList.toggle('show-nav')
    })
    for (let item of navItems){
        item.addEventListener('click', ()=>{
            burger.classList.remove('show-mobile-btn')
            nav.classList.remove('show-nav')
        })

    }
}
burgerFunc()

const preventReload = () =>{
    const linkTag = document.querySelectorAll('a')
    for (let item of linkTag){
        item.addEventListener('click', (e)=>{
            console.log(e)
            e.preventDefault()
            //уБИРАЕТ перезагрузку страницы
        })
    }
}
preventReload()