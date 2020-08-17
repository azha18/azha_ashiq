(function($){
  $(document).ready(function(){

    // menu bar active js file here
    $(".nev ul li a").on( 'click', function(e){
        // e.preventDefault();
        console.log('hello world')
        $(".nev ul li a").each(function(){
          if($(this).is(".active")){
            $(this).removeClass("active");
          }
        })
        $(this).addClass("active")

    });

    // porfolio menu active js file here

    $(".custome-btn").on( 'click', function(e){
        // e.preventDefault();
        console.log('hello world')
        $(".button-group button").each(function(){
          if($(this).is(".portfolio-active")){
            $(this).removeClass("portfolio-active");
          }
        })
        $(this).addClass("portfolio-active")

    });

    // Nav ber scrolling color change js file here

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>500){
        $(".header-top").addClass("menu-bar-scroll")
      }else{
        $(".header-top").removeClass("menu-bar-scroll")
      }
    });


    // type js file here
    var typed = new Typed('.type', {
      strings: ['Freelencer', 'Developer','Designer'],
              typeSpeed: 100,
              backSpeed: 100,
              loop: true,
    });

    // external js: isotope.pkgd.js


    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function( itemElem ) {
          var weight = $( itemElem ).find('.weight').text();
          return parseFloat( weight.replace( /[\(\)]/g, '') );
        }
      }
    });

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };

    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });

    // bind sort button click
    $('#sorts').on( 'click', 'button', function() {
      var sortByValue = $(this).attr('data-sort-by');
      $grid.isotope({ sortBy: sortByValue });
    });



  });
})(jQuery)
