const togglebutton= document.getElementsByClassName("toggle-button-right")[0];
const navbar=document.getElementsByClassName("nav-items")[1];
console.log(navbar);

togglebutton.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})

const tabs= document.querySelectorAll('[data-tab-target]')
const tabContents= document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',() => {
        const target=document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => { tabContent.classList.remove('active') })
        target.classList.add('active')
    })

})