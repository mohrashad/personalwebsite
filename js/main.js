// ajust nav bar code
const navbar = document.querySelector('.navbar'),
      img = document.querySelector('#logo'),
      navLinks = document.querySelectorAll('.nav-link'),
      navli = document.querySelectorAll('.nav-item');
window.onscroll = function(){
    if(this.pageYOffset >= 200){
        navbar.style.background = 'linear-gradient(90deg, #4458dc, #854fee 100%)';
        navbar.style.boxShadow = '0px 10px 30px rgba(57, 56, 61, 0.205)';
        navbar.classList.replace('navbar-light', 'navbar-dark');
        img.setAttribute('src', 'assets/logo2.png');
        navLinks.forEach(link =>{
            link.classList.add('white-color');
        })
        navli.forEach(li =>{
            li.classList.add('hover-class');
        })
    }else if(this.pageYOffset == 0){
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = 'none';
        navbar.classList.replace('navbar-dark', 'navbar-light');
        img.setAttribute('src', 'assets/logo.png');
        navLinks.forEach(link =>{
            link.classList.remove('white-color');
        })
        navli.forEach(li =>{
            li.classList.remove('hover-class');
        })
    }
    
}

// jquery code
$(document).ready(function(){
    // adjust nav links scroll
    $('.navbar .nav-item .nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $("#" + $(this).data('value')).offset().top - 100
        }, 1000)
    });


    // use isotope js code
    const filterBtns = document.querySelectorAll('.our-work .button-group button');
    filterBtns.forEach(btn => {
        btn.onclick = function(e){
            filterBtns.forEach(removeBtn => {
                removeBtn.classList.remove('active');
            })
            e.target.classList.add('active');
            const dataFilter = e.target.dataset.filter;
            $('.our-work .grid').isotope({
                filter: dataFilter
            })
        }
    })
    // use popup js code
    $(".fancybox").fancybox(); 

    // owel carousel js code
    $('.client-say .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1,
            },
            600: {
                items: 2
            }
        }
    })
});
