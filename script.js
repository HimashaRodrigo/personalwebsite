$(window).scroll(() => {
      if(this.scrollY > 20){
          $(".navbar").addClass("sticky");
          $(".brand").addClass("brand-sticky");
          $(".brandSeparate-text").addClass("brandSeparate-sticky");
          $(".navbar-dark .navbar-nav .nav-link").addClass("root-sticky");

      }else{
          $(".navbar").removeClass("sticky");
          $(".brand").removeClass("brand-sticky");
          $(".brandSeparate-text").removeClass("brandSeparate-sticky");
          $(".navbar-dark .navbar-nav .nav-link").removeClass("root-sticky");
      }
});


$(".nav-link").on("click", () => {
    $(".collapse.navbar-collapse").removeClass("show");
});


let typed = new Typed(".typing", {
  strings: ["Software Developer" , "Undergraduate"],
  typeSpeed: 150,
  backSpeed: 80,
  loop: true
});
