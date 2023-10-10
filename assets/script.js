window.addEventListener('load', ()=>{
    let allTab = document.querySelectorAll('.tab');
    let allProject = document.querySelectorAll('.project');

    // Remove-TabActive
    const removeActive=()=> allTab.forEach(tab=>{
        tab.classList.remove('tab-active')
    })
    allTab.forEach(tab=>{
        // add-TabActivr
        tab.addEventListener('click',(event)=>{
            removeActive();
            tab.classList.add('tab-active');
        
        let filterName = event.target.getAttribute('data-name');

        allProject.forEach(project=>{
            let projectName = project.getAttribute('data-name');
            if ((projectName == filterName) || filterName == 'All'){
                project.style.display = 'block';
            }else{
                project.style.display = 'none'
            }
        })
        });
    })
})

//  nav scroll

window.addEventListener('scroll', ()=>{
    let nav = document.querySelector('nav');

    nav.classList.toggle('nav-scroll', window.scrollY>0);
});

// Typed JS

let typed = new Typed('.typed-text',{
    strings: ['Email', 'Web'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

// menu Bar Js...............
let menuBar = document.querySelector('.menu-bar');
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click',()=>{
    menuBar.classList.toggle('menu-none')
});

