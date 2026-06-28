
let buttons = document.querySelectorAll('.link')

buttons.forEach(button => {
    button.addEventListener('click' , () => {

        buttons.forEach(link => {
            link.style.color = ""
        })
        button.style.color = '#00D100'
        
    });
});
const text = document.querySelectorAll(".text1");
const text2 = document.querySelectorAll(".text2");
const text3 = document.querySelectorAll(".text3");
const text4 = document.querySelectorAll(".text4");
const text5 = document.querySelectorAll(".text5");


window.addEventListener("scroll", () => {

    text.forEach(item => {
        if (window.scrollY > 100) {
            item.style.transform = "translate(0px, 0px)";
        }
    });

    text2.forEach(item2 => {
        if (window.scrollY > 800) {
            
             item2.style.transform = "translateX(0)";
        }
    });

    text3.forEach(item3 => {
        if (window.scrollY > 1200) {
            
             item3.style.transform = "translateX(0)";
        }
    });

     text4.forEach(item4 => {
        if (window.scrollY > 1700) {
            
             item4.style.transform = "translateX(0)";
        }
    });

    text5.forEach(item5 => {
        if (window.scrollY > 2200) {
            
             item5.style.transform = "translateX(0)";
        }
    });

});

const typed = new Typed('.multiple-text', {
    strings: [
        'Frontend Developer',
        'Web Designer',
        
    ],
    typeSpeed: 100,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});



  const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
});   